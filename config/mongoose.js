// Load the module dependencies
var config_1 = require('./config');
var mongoose = require('mongoose');
// Define the Mongoose configuration method
function MongooseConfig() {
    // Use Mongoose to connect to MongoDB
    // Load the application models
    require('../app/models/drone.model');
    // require('../app/models/geo.model');
    // require('../app/models/mission.model');
    // require('../app/models/ticket.model');
    // load the db
    var db = mongoose.connect(config_1.config.db);
}
exports.MongooseConfig = MongooseConfig;
;
//# sourceMappingURL=mongoose.js.map