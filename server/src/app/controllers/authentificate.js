const express = require('express');
const router = express.Router();
const User = require('../models/User'); 


module.exports = app => app.use('/auth', router);