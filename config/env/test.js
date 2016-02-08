// Invoke 'strict' JavaScript mode
'use strict';
// Set the 'development' environment configuration object
exports.TestEnv = {
    environment: 'test',
    db: {
        name: 'mongodb://localhost/medfleet',
        sessionSecret: 'BlueDemons',
        options: {
            db: { native_parser: true },
            server: { poolSize: 5 },
            replset: { rs_name: 'myReplicaSetName' },
            user: 'phawk',
            pass: 'Blue Demons'
        }
    },
    google: {
        clientID: 'Google Application ID',
        clientSecret: 'AIzaSyAbPi-tYfg2yibUTQL2Zwrp4-dXHE6iBG8',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    },
    express: {
        port: 3000
    }
};
//# sourceMappingURL=test.js.map