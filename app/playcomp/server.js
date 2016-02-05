var mongoose = require('./config/mongoose'), express = require('./config/express');
var config_1 = require('./config/config');
// Create a new Mongoose connection instance
var db = mongoose();
// Create a new Express application instance
var app = express(db);
// Use the Express application instance to listen to the '3000' port
app.listen(config_1.config.express.port);
console.log("Server running at http://localhost:" + config_1.config.express.port);
exports.App = app;
//# sourceMappingURL=server.js.map