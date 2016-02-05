import express = require('express'); // to get the nameing right...
import * as drone from '../controllers/drone.server.controler';

export function droneRts(app: express.Express) {
    app.route('/drones')
     .post(drone.create)
     .get(drone.list);
}