var drone_model_1 = require('../models/drone.model');
function list(req, res) {
    res.json({ "foo": "bar" });
}
exports.list = list;
;
function create(req, res) {
    var drone = new drone_model_1.Drone(req.body);
}
exports.create = create;
;
//# sourceMappingURL=drone.server.controler.js.map