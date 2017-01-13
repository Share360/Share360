const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

// INITIALIZE EXPRESS, PASSPORT

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(app.get('port'), () => {
  console.log('Listening on port', app.get('port'));
});