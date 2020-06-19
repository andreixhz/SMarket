const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.get('/:id', async(req,res) => {

    return res.status(200).send({user:{name: "andrei", age: 19}});

});

module.exports = app => app.use('/user', router);