import express = require('express');
import morgan = require('morgan');
import bodyParser = require('body-parser');
import {config} from './config';

export function ExpressConfig(){
   var app = express();

// logger 
app.use(morgan('dev'));

// sets file return to right Type 
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

bodyParser.json


// // routes
// droneRts(app);
// TicketRts(app);
// missionRts(app);
// GeoRts(app);

return app;
 
}
