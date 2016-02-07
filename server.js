"use strict";
const express = require('./config/express');
const config_1 = require('./config/config');
// db
require('./config/mongoose');
var app = express.ExpressConfig();
app.listen(config_1.config.express.port);
console.log(`Server running on ${config_1.config.express.port}`);
exports.App = app;
//# sourceMappingURL=server.js.map