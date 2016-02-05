var express = require('./config/express');
var config_1 = require('./config/config');
var app = express.ExpressConfig();
app.listen(config_1.config.express.port);
console.log(`Server running on ${config_1.config.express.port}`);
exports.App = app;
//# sourceMappingURL=server.js.map