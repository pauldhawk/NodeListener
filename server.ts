import express = require('express');
import morgan = require('morgan');
import bodyParser = require('body-parser');

var port = 3000;
var app = express();

// logger 
app.use(morgan('dev'));

// sets file return to right Type 
app.use(bodyParser.urlencoded({
    extended: true
}));
 app.routes
app.use(bodyParser.json());

bodyParser.json

app.listen(port);

export var App= app;

console.log(`Server running on ${port}`);