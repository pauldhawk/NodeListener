"use strict";
var mongoose = require('mongoose');
const drone_model_1 = require('../models/drone.model');
// export function list(req: express.Request, res:  express.Response) {
//     res.json({"foo": "bar"});
// };
function list(req, res, next) {
    drone_model_1.Drone.find({}, function (err, drones) {
        res.json(drones);
    });
}
exports.list = list;
;
function create(req, res) {
    var drone = new drone_model_1.Drone(req.body.content);
    drone.save();
}
exports.create = create;
//# sourceMappingURL=drone.server.controler.js.map