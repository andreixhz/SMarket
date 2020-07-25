const express = require('express');
const router = express.Router();
const Category = require('../models/Category'); 
const SubCategory = require('../models/SubCategory');

//Category.sync({force:true});
//SubCategory.sync({force:true});

// create Category
router.post('/', async(req, res) => {


    if(!await Category.findOne({where:{id:req.body.cat_id}}))
        return res.status(200).json({msg: 'category_not_found', code: 200});

    if(await SubCategory.findOne({where:{name: req.body.name}}))
        res.status(200).json({status:{code:200, msg:'subCategory_already_existing'}})
    
    return res.status(200).json({status:{code:200, msg:'subCategory_has_been_created'}, data: await SubCategory.create(req.body)});

});



module.exports = app => app.use('/subcategory', router);