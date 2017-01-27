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

app.get('/api/logout', (req, res) => {
  req.logout();
  res.status(200).send(true);
});

app.post('/api/signup', mainServCtrl.signUp);

//stuff for validations
// app.use('api/users', users);

app.get('/api/getvideobyid/:id', mainServCtrl.getVideoById);

// S3 Endpoint
app.get('/upload', (req, res) => {
    upload(req.query).then(url => {
        res.json({url: url});
    }).catch(e => {
        console.log(e);
    });
});

// S3 Uploader
const aws = require('aws-sdk');

const BUCKET = 'share360videosbucket';

function upload(file) {
    const s3 = new aws.S3();
    const params = {
        Bucket: BUCKET,
        Key: file.filename,
        Expires: 60,
        ContentType: file.filetype,
        ACL: 'public-read'
    };

    return new Promise((resolve, reject) => {
        s3.getSignedUrl('putObject', params, (err, url) => {
            if (err) {
                reject(err);
            }
            console.log(url);
            resolve(url);
        });
    });
}

app.get('/api/search/:searchterm', mainServCtrl.getSearchResults);

app.get('/api/getfavorites/:id', mainServCtrl.getFavoritesById);

app.post('/api/addfavorite', mainServCtrl.addFavorite);

app.delete('/api/removefavorite', mainServCtrl.removeFavorite);

app.get('/api/checkfavorite', mainServCtrl.checkFavorite);

app.get('/api/checklogin', (req, res) => {
  if (req.user) {
    res.status(200).send({loggedIn: true, username: req.user[0].username, id: req.user[0].id});
  } else {
    res.status(200).send({loggedIn: false});
  }
});

app.get('/api/getRecentVideos', mainServCtrl.getRecentVideos);

app.post('/api/getvideosbycategory', mainServCtrl.getCategoriesVideos);

app.get('/api/mostpopularvideos', mainServCtrl.mostpopularvideos);

//profile endpoints

app.get('/api/getProfile/:id', mainServCtrl.getProfile);

app.post('/api/addprofileimg', mainServCtrl.addProfileImg);
