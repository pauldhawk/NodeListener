import express = require('express');
import morgan = require('morgan');
import bodyParser = require('body-parser');
import {config} from './config/config';
import {droneRts} from './app/routes/drone.server.route';
import {TicketRts} from './app/routes/ticket.server.route';
import {missionRts} from './app/routes/mission.server.route';
import {GeoRts} from './app/routes/geo.server.route';

var app = express();

// logger 
app.use(morgan('dev'));

// sets file return to right Type 
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

bodyParser.json

app.listen(config.express.port);
droneRts(app);
TicketRts(app);
missionRts(app);
GeoRts(app);

export var App = app;

console.log(`Server running on ${config.express.port}`);