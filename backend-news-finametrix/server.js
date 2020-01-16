const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const router = require('./network/routes');
const config = require('./config');

db(config.dbUrl);

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router(app);

app.listen(config.port, function() {
    console.log('La aplicación está escuchando en ' + config.host + ':' + config.port);
});