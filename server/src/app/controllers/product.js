const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); 



module.exports = app => app.use('/auth', router);