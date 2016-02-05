import express = require('express');
import morgan = require('morgan');
import bodyParser = require('body-parser');
import {config} from './config/config';

var app = express();

// logger 
app.use(morgan('dev'));

// sets file return to right Type 
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

bodyParser.json

app.listen(config.express.port);

export var App = app;

console.log(`Server running on ${config.express.port}`);