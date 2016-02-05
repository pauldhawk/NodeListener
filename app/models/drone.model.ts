import mongoose = require('mongoose');
var Schema = mongoose.Schema;

export var droneSchema = new mongoose.Schema({
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

export var Drone = mongoose.model('Drone', droneSchema);
