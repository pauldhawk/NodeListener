import {config} from './config/config';

/// the app //////////////////
//var app = express.ExpressConfig();
import bodyParser = require('body-parser');
import morgan = require('morgan');
import express = require('express');


var app = express();

// logger 
app.use(morgan('dev'));

// sets file return to right Type 
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

bodyParser.json


// routes
//droneRts(app);


// db ///////////////////////////
import mongoose = require('mongoose');
var db = mongoose.connect(config.db);

var Schema = mongoose.Schema;

/// db schema 
var droneSchema = new mongoose.Schema({
    id: Number,
    name: String,
    lat: Number,
    long: Number,
    altitude: Number,
    velocity: Number,
    battery: Number,
    last_heartbeat: Number,
    heading: Number,
    armed: Boolean,
    mode: String
});
var Drone = mongoose.model('Drone', droneSchema);

/// test 
var a = new Drone ({ 
   "name":"b",
   "lat":2,
   "long":2,
   "altitude":25555,
   "velocity":2333,
   "battery":555552,
   "last_heartbeat":2,
   "heading":2,
   "armed":true,
   "mode":"Stddddring"
});

//test save
a.save(function (err, a) {
  if (err) return console.error(err);
  console.log(a);
});


app.listen(config.express.port);
console.log(`Server running on ${config.express.port}`);

a.save(function (err, a) {
  if (err) return console.error(err);
  console.log(a);
});


///////////// routes 
    app.route('/drones')
     .post(function (req, res) {
        res.json({"foo": "bar"});
})
     .get(function (req, res) {
        res.json({"foo": "bar"});
    });

app.get('/', function (req, res) {
  res.send('Hello World!');
});

function create(req: express.Request, res:  express.Response) {
    res.json({"foo": "bar"});
};

function list(req: express.Request, res:  express.Response) {
    res.json({"foo": "bar"});
};

export var App = app;
