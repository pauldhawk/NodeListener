var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
function ExpressConfig() {
    var app = express();
    // logger 
    app.use(morgan('dev'));
    // sets file return to right Type 
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    bodyParser.json;
    // // routes
    // droneRts(app);
    // TicketRts(app);
    // missionRts(app);
    // GeoRts(app);
    return app;
}
exports.ExpressConfig = ExpressConfig;
//# sourceMappingURL=express.js.map