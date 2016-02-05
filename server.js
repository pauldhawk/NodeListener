var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var config_1 = require('./config/config');
var drone_server_route_1 = require('./app/routes/drone.server.route');
var ticket_server_route_1 = require('./app/routes/ticket.server.route');
var mission_server_route_1 = require('./app/routes/mission.server.route');
var geo_server_route_1 = require('./app/routes/geo.server.route');
var app = express();
// logger 
app.use(morgan('dev'));
// sets file return to right Type 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
bodyParser.json;
app.listen(config_1.config.express.port);
drone_server_route_1.droneRts(app);
ticket_server_route_1.TicketRts(app);
mission_server_route_1.missionRts(app);
geo_server_route_1.GeoRts(app);
exports.App = app;
console.log(`Server running on ${config_1.config.express.port}`);
//# sourceMappingURL=server.js.map