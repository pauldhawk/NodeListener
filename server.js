var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var config_1 = require('./config/config');
var app = express();
// logger 
app.use(morgan('dev'));
// sets file return to right Type 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
bodyParser.json;
app.listen(config_1.config.express.port);
exports.App = app;
console.log(`Server running on ${config_1.config.express.port}`);
//# sourceMappingURL=server.js.map