var drone = require('../controllers/drone.server.controler');
function droneRts(app) {
    app.route('/drones')
        .post(drone.create)
        .get(drone.list);
}
exports.droneRts = droneRts;
//# sourceMappingURL=mission.server.route.js.map