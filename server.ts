import express = require('./config/express');
import {config} from './config/config';

// db
require('./config/mongoose');
var app = express.ExpressConfig();

app.listen(config.express.port);

console.log(`Server running on ${config.express.port}`);

export var App = app;
