const express = require('express');
const router = express.Router();
const User = require('../models/User'); 

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const authConfig = require('../../config.js');

const generateToken = (params = {}) => jwt.sign(params, authConfig.secret, {expiresIn: 986400,});

router.post('/', async (req, res) => {

    const {userlogin, password} = req.body;
    if(!userlogin) return;
    if(!password) return;

    const user = await User.findOne({where: {userlogin, password}});
    if(!user)
        return res.status(400).send({status:{code:400, msg:'user_not_found'}});

    user.password = undefined;
    return res.status(200).json({status:{code:200, msg:'user_logged_with_sucess'}, data: user, token: generateToken({id: user.id})});

});

module.exports = app => app.use('/auth', router);