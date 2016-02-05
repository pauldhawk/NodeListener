var mongoose = require('mongoose');
var Schema = mongoose.Schema;
exports.droneSchema = new mongoose.Schema({
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
exports.Drone = mongoose.model('Drone', exports.droneSchema);
//# sourceMappingURL=drone.model.js.map