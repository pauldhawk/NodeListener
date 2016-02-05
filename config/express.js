// Invoke 'strict' JavaScript mode
'use strict';
var express = require('express');
var morgan = require('morgan');
//import socketio = require('socket.io');
//import http = require('http');
var compress = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//var MongoStore = require('connect-mongo')(express);
var config_1 = require('./config');
function ExpressConfig(db) {
    var app = express();
    // Create a new HTTP server
    //var server = http.createServer(app);
    // Create a new Socket.io server
    //var io = socketio.listen(server);
    if (config_1.config.environment === 'development') {
        app.use(morgan('dev')); // logger  
    }
    else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }
    // var mongoStore = new MongoStore({
    //     db: db.connection.db
    // });
    //Use the 'body-parser' and 'method-override' middleware functions
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    // app.use(session({
    // 	saveUninitialized: true,
    // 	resave: true,
    // 	secret: config.sessionSecret,
    // 	store: mongoStore
    // }));
    // Load the routing files
    //require droneRts(app));
    // require('../app/routes/mission.server.route.')(app);
    // require('../app/routes/ticket.server.route.')(app);
    // Configure static file serving
    app.use(express.static('./public'));
    // Load the Socket.io configuration
    //require('./socketio')(server, io, mongoStore);
    return app;
}
exports.ExpressConfig = ExpressConfig;
//# sourceMappingURL=express.js.map