import express = require('express'); // to get the nameing right...
var mongoose = require( 'mongoose' );
import {Drone} from '../models/drone.model';


// export function list(req: express.Request, res:  express.Response) {
//     res.json({"foo": "bar"});
// };

export function list(req:any, res:any, next:any) {
    Drone.find({}, function(err, drones) {
            res.json(drones);
        })
    };

export function create(req: express.Request, res:  express.Response) {
    var drone = new Drone(req.body.content);
    drone.save();
}
