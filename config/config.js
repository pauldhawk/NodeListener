var development_1 = require('./env/development');
var production_1 = require('./env/production');
var test_1 = require('./env/test');
// to change 
// export NODE_ENV=production
var envSettings = process.env.NODE_ENV;
// Invoke 'strict' JavaScript mode
'use strict';
var env;
switch (envSettings) {
    case 'production':
        env = production_1.ProdEnv;
        break;
    case 'test':
        env = test_1.TestEnv;
        break;
    default:
        env = development_1.DevEnv;
        break;
}
exports.config = env;
//# sourceMappingURL=config.js.map