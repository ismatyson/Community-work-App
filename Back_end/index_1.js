const winston = require('winston');
const express=require('express');
const vid=express();

require('./startup/logging');
require('./startup/routes')(vid);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

const port=process.env.PORT || 9000;
const server=vid.listen(port,() => winston.info(`Listening on port ${port}..`));

module.exports = server;
