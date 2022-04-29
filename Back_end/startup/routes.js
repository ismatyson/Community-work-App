const express=require('express');
const users=require('../routes/Users');
const auth=require('../routes/auth');
const error = require('../middleware/nodejs/error');
const bodyParser = require('body-parser');
const path = require('path');
var cors = require('cors')


module.exports = function(vid){
    vid.use(cors())
    vid.use(bodyParser.json())
    vid.use(bodyParser.urlencoded({ extended: true }));
    vid.use('/public', express.static(path.join(__dirname, 'public')));
    vid.use(express.json());
    vid.use('/community/users',users);
    vid.use('/community/auth',auth);
    vid.use(error);
}