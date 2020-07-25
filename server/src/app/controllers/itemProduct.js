const express = require('express');
const router = express.Router();
const ItemProduct = require('../models/ItemProduct');
const Product = require('../models/Product');

//ItemProduct.sync({force:true});

// create Product
router.post('/', async(req, res) => {

    if(!await Product.findOne({where:{id: req.body.id_product}})) return res.status(200).json({status:{code:200, msg:'product_not_found'}})
    res.status(200).json({status:{code:200, msg:'itemProduct_has_been_created'}, data: await ItemProduct.create(req.body)})

})

module.exports = app => app.use('/itemProduct', router);