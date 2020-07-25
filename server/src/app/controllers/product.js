const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); 

//Product.sync({force:true});

// create Product
router.post('/', async(req, res) =>
    await Product.findOne({where:{code_bar: req.body.code_bar}}) 
    ? res.status(200).json({status:{code:200, msg:'product_already_existing'}})
    : res.status(200).json({status:{code:200, msg:'product_has_been_created'}, data: await Product.create(req.body)}))


module.exports = app => app.use('/product', router);