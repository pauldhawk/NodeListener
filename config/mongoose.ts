// Load the module dependencies
import {config} from './config';
import mongoose = require('mongoose');

// Define the Mongoose configuration method
export function MongooseConfig() {
	// Use Mongoose to connect to MongoDB


	// Load the application models
	require('../app/models/drone.model');
    // require('../app/models/geo.model');
    // require('../app/models/mission.model');
    // require('../app/models/ticket.model');

    // load the db
    var db = mongoose.connect(config.db);
};
