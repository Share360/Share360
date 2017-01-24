const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const massive = require('massive');

const secrets = require('./server/secrets');
const config = require('./server/config');
// const users = require('./server/routes/users');


// INITIALIZE EXPRESS, PASSPORT

const app = module.exports = express();

const massiveInstance = massive.connectSync({connectionString: config.postgresURL });

app.set('db', massiveInstance);
const db = app.get('db');

const mainServCtrl = require('./server/serverCtrl/mainServCtrl');

app.use( session({
  secret: secrets.sessionSecret,
  saveUninitialized: false,
  resave: true
}));
app.use( passport.initialize() );
app.use( passport.session() );
passport.use( new LocalStrategy(
  function(username, password, done) {
    mainServCtrl.findUser( username, password, (user) => {
      if(!user) {
        return done(null, false);
      }
      return done(null, user);
    })
  }
));
passport.serializeUser( function( user, done ) {
  done( null, user);
});
passport.deserializeUser( function (obj, done) {
  done( null, obj);
});

app.set('port', (process.env.PORT || 3000));

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(app.get('port'), () => {
  console.log('Listening on port', app.get('port'));
});

//endpoints
// app.get('/test', mainServCtrl.test);

app.post('/api/login', (req, res) => {
    passport.authenticate( 'local', function( error, user, info ) {
        if(error) { res.send( { success: false } ) }
        else if ( !user ) { res.send( { success: false } ) }
        else {
            req.logIn( user, function(err) {
                if( err ) {return res.send( { success: false } ) }
                else { return res.send( { success: true, user: user[0].username, id: user[0].id } ) }
            })
        }

    })(req, res);
});
app.post('/api/signup', mainServCtrl.signUp);

//stuff for validations
// app.use('api/users', users);

app.get('/api/getvideobyid/:id', mainServCtrl.getVideoById);

app.get('/api/search/:searchterm', mainServCtrl.getSearchResults);

app.get('/api/getfavorites/:id', mainServCtrl.getFavoritesById);

app.post('/api/addfavorite', mainServCtrl.addFavorite);

app.get('/api/checklogin', (req, res) => {
  if (req.user) {
    res.status(200).send({loggedIn: true, username: req.user[0].username, id: req.user[0].id});
  } else {
    res.status(200).send({loggedIn: false});
  }
});

app.post('/api/getvideosbycategory', mainServCtrl.getCategoriesVideos);
