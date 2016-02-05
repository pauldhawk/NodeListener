// Load the module dependencies
import {config} from './config';
import mongoose = require('mongoose');

// Define the Mongoose configuration method
export function MongooseConfig(): mongoose.Mongoose {
	// Use Mongoose to connect to MongoDB
	var db = mongoose.connect(config.db);

	// Load the application models 
	require('../app/models/drone.model');
//	require('../app/models/geo.model');
 //   require('../app/models/mission.model');
  //  require('../app/models/ticket.model');

	// Return the Mongoose connection instance
	return db;
};