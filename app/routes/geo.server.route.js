var drone = require('../controllers/drone.server.controler');
function GeoRts(app) {
    app.route('/drones')
        .post(drone.create)
        .get(drone.list);
}
exports.GeoRts = GeoRts;
//# sourceMappingURL=geo.server.route.js.map