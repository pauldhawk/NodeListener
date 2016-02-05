import express = require('express'); // to get the nameing right...
import {Drone} from '../models/drone.model';


export function list(req: express.Request, res:  express.Response) {
    res.json({"foo": "bar"});
};
export function create(req: express.Request, res:  express.Response) {
    var drone = new Drone(req.body);
};
