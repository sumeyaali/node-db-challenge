const express = require('express');

const projectRouter = require('../Projects/projectRouter');
const resourceRouter = require('../Resources/resourceRouter');
const taskRouter = require("../Tasks/taskRouter");


const server = express();

server.use(express.json());
 server.use('/api/projects', projectRouter);
 server.use('/api/resources', resourceRouter);
 server.use('/api/tasks', taskRouter);



module.exports = server;