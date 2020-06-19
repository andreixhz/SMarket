const express = require('express');
const router = express.Router();
const User = require('../models/User'); 

//register router
router.post('/', async(req,res) => {
    
    const data = req.body;
    if(await User.findOne({
        where: {
            userlogin: data.userlogin
        }
    })) return res.send('User alredy_exists');

    const user = await User.create(data);
    user.password = undefined;
    return res.json({code: 200, messege: 'user_created', data: user});

});

module.exports = app => app.use('/auth', router);