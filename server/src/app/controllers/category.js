const express = require('express');
const router = express.Router();
const Category = require('../models/Category'); 

//Category.sync();

// create Category
router.post('/', async(req, res) =>
    await Category.findOne({where:{name: req.body.name}}) 
    ? res.status(200).json({status:{code:200, msg:'category_already_existing'}})
    : res.status(200).json({status:{code:200, msg:'category_has_been_created'}, data: await Category.create(req.body)}))


module.exports = app => app.use('/category', router);