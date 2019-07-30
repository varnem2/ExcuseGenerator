import { Sequelize } from "sequelize";
import Models from '../models';

const express = require('express');
const http = require('http');


export default class Routes {
    public sequelize: Sequelize;

    async start(models: Models) {
        

        var app = express();
        var server = http.createServer(app);
        
    }
}