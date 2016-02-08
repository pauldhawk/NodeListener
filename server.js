var config_1 = require('./config/config');
////////////////////////////////////
/// the web browser ////////////////
//var app = express.ExpressConfig();
///////////////////////////////////
var bodyParser = require('body-parser');
var morgan = require('morgan');
var express = require('express');
var app = express();
// logger //
app.use(morgan('dev'));
// sets file return to right Type 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
bodyParser.json;
///////////////////////////////////////
////////////// db /////////////////////
///////////////////////////////////////
var mongoose = require('mongoose');
var db = mongoose.connect(config_1.config.db.name, config_1.config.db.options);
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
var a = new Drone({
    "name": "b",
    "lat": 2,
    "long": 2,
    "altitude": 25555,
    "velocity": 2333,
    "battery": 555552,
    "last_heartbeat": 2,
    "heading": 2,
    "armed": true,
    "mode": "Stddddring"
});
//test save
a.save(function (err, a) {
    if (err)
        return console.error(err);
    console.log(a);
});
app.listen(config_1.config.express.port);
console.log(`Server running on ${config_1.config.express.port}`);
a.save(function (err, a) {
    if (err)
        return console.error(err);
    console.log(a);
});
///////////////////////////////////////////
///////////// routes /////////////////////
/////////////////////////////////////////
app.route('/drones')
    .get(function (req, res, next) {
    Drone.find({}, function (err, drones) {
        if (err) {
            return next(err);
        }
        else {
            res.json(drones);
        }
    });
});
app.route('/drones').post(function (req, res, next) {
    var b = new Drone(req.body);
    b.save(function (err, b) {
        if (err) {
            return next(err);
        }
        else {
            console.log(`${b} saved to the db`);
            res.json(b);
        }
    });
});
app.get('/', function (req, res) {
    res.send('Hello World!');
});
function create(req, res) {
    res.json({ "foo": "bar" });
}
;
function list(req, res, next) {
    Drone.find({}, function (err, drones) {
        if (err) {
            return next(err);
        }
        else {
            res.json(drones);
        }
    });
}
;
// function list(req: express.Request, res:  express.Response) {
//     res.json({"foo": "bar"});
// };
exports.App = app;
// exports.list = function(req, res, next) {
//   User.find({}, function(err, users) {
//     if (err) {
//       return next(err);
//     } else {
//       res.json(users);
//     }
//   });
// }; 
//# sourceMappingURL=server.js.map