import {ConfigEnv} from './config.interface';

// Invoke 'strict' JavaScript mode
'use strict';
// Set the 'development' environment configuration object

export var TestEnv: ConfigEnv = {
    environment: 'test' ,
    db: 'mongodb://localhost/medfleet',
    sessionSecret: 'BlueDemons',
    google: {
        clientID: 'Google Application ID',
        clientSecret: 'Google Application Secret',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    },
    express: {
        port: 3000
    }
};