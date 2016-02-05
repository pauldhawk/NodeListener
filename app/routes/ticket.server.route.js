var drone = require('../controllers/drone.server.controler');
function TicketRts(app) {
    app.route('/drones')
        .post(drone.create)
        .get(drone.list);
}
exports.TicketRts = TicketRts;
//# sourceMappingURL=ticket.server.route.js.map