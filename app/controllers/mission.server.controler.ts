import express = require('express'); // to get the nameing right...
import {App} from './server'

export function list(req: express.Request, res:  express.Response) {
    res.json({"foo": "bar"});
};
export function create(req: express.Request, res:  express.Response) {
    res.json({"foo": "bar"});
};
