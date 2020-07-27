const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async(req, res) => {
   
    const data = req.body;
    if(await User.findOne({ where: { userlogin: data.userlogin} })) return res.send('User alredy_exists');
    const user = await User.create(data);
    user.password = undefined;
    return res.json({code: 200, messege: 'user_created', data: user});

});

//get one
router.get('/:id', async(req,res) => {

    const id = req.params.id;
    const user = await User.findOne({
        where:{
            id
        }
    });
    if(!user) return res.status(204).json({code: 204, msg:"user_not_found"});

    user.password = undefined;
    return res.status(200).json({code: 200, msg: "user_found", data: user});

});

//get all
router.get('/', async(req, res) => res.status(200).json({code:200, msg:"user_getted_all", data:await User.findAll({ limit: 10, offset: (req.query.page - 1) * 10 }) }))

//delete
router.delete('/:id', async(req, res) => {

    const user = await User.findOne({where: { id: req.params.id }});

    if(!user) return res.status(200).json({msg: 'user_not_found', code: 200});

    await user.destroy();
    return res.status(200).json({msg: 'user_deleted', code: 200});
        
});

//atualize
router.put('/:id', async(req, res) => {

    const id = req.params.id;
    const user = await User.findOne({ where:{ id }});
    
    if(!user) return res.status(204).json({code: 204, msg:"user_not_found"});
    user.set(req.body);

    await user.save();
    return res.status(200).json({code: 200, msg:"user_updated"});

});



module.exports = app => app.use('/user', router);