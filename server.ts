var mongoose = require('./config/mongoose'),
	express = require('./config/express');
import {config} from './config/config';

// Create a new Mongoose connection instance
var db = mongoose();

// Create a new Express application instance
var app = express(db);

// Use the Express application instance to listen to the '3000' port
app.listen(config.express.port);

console.log(`Server running at http://localhost:${config.express.port}`);

export = app;