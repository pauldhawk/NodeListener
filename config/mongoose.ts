// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var	config = require('./config'),
	mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function() {
	// Use Mongoose to connect to MongoDB
	var db = mongoose.connect(config.db);

	// Load the application models 
	require('../app/models/drone.model');
	require('../app/models/geo.model');
    require('../app/models/mission.model');
    require('../app/models/ticket.model');

	// Return the Mongoose connection instance
	return db;
};