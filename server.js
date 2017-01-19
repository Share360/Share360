const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const massive = require('massive');

const secrets = require('./server/secrets');
const config = require('./server/config');

// INITIALIZE EXPRESS, PASSPORT

const app = module.exports = express();

let massiveInstance = massive.connectSync({connectionString: config.postgresURL });

app.set('db', massiveInstance);
let db = app.get('db');

const mainServCtrl = require('./server/serverCtrl/mainServCtrl');

app.use( session({
  secret: secrets.sessionSecret,
  saveUninitialized: false,
  resave: true
}));
app.use( passport.initialize() );

app.use( passport.session() );

app.set('port', (process.env.PORT || 3000));

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(app.get('port'), () => {
  console.log('Listening on port', app.get('port'));
});

//endpoints

app.get('/test', mainServCtrl.test);

app.get('/api/getvideobyid/:id', mainServCtrl.getVideoById);
