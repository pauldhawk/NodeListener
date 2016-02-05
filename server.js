var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var port = 3000;
var app = express();
// logger 
app.use(morgan('dev'));
// sets file return to right Type 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.routes;
app.use(bodyParser.json());
bodyParser.json;
app.listen(port);
exports.App = app;
console.log("Server running on " + port);
//# sourceMappingURL=server.js.map