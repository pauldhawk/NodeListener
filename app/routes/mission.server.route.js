var drone = require('../controllers/drone.server.controler');
function missionRts(app) {
    app.route('/drones')
        .post(drone.create)
        .get(drone.list);
}
exports.missionRts = missionRts;
//# sourceMappingURL=mission.server.route.js.map