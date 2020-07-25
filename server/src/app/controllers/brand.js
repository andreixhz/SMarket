const express = require('express');
const router = express.Router();
const Client = require('../models/Client')
const Brand = require('../models/Brand')

//Brand.sync();
//Client.sync();

router.post('/', async(req, res) => {
   
    const data = req.body;
    if(!await Client.findOne({where: { id: data.client_id }})) return res.status(200).json({status:{code:200, msg:'client_not_found'}});

    if(await Brand.findOne({where: { cnpj: data.cnpj }})) return res.status(200).json({status:{code:204, msg:'brand_alredy_exists'}});

    const brand = await Brand.create(data);
    return res.json({status:{code:200, msg:'brand_has_been_created'}, data: brand});

});

//get one
router.get('/:cnpj', async(req,res) => {

    const cnpj = req.params.cnpj;
    const brand = await Brand.findOne({
        where:{
            cnpj
        }
    });
    if(!brand) return res.status(200).json({status:{code:200, msg:'brand_not_found'}});
    return res.status(200).json({status:{code:200, msg:'brand_has_found'}, data: brand});

});

//get all
router.get('/', async(req, res) => res.status(200).json({status:{code:200, msg:'brand_getted_all'}, data:await Brand.findAll({ limit: 10, offset: (req.query.page - 1) * 10 }) }))

//delete
router.delete('/:id', async(req, res) => {

    const brand = await Brand.findOne({where: { id: req.params.id }});

    if(!brand) return res.status(200).json({status:{code:200, msg:'brand_not_found'}});

    await brand.destroy();
    return res.status(200).json({status:{code:200, msg:'brand_deleted'}});
        
});

//atualize
router.put('/:id', async(req, res) => {

    const id = req.params.id;
    const brand = await Brand.findOne({ where:{ id }});
    
    if(!brand) return res.status(200).json({status:{code:200, msg:'brand_not_found'}});
    brand.set(req.body);

    await brand.save();
    return res.status(200).json({status:{code:200, msg:'brand_updated'}});

});



module.exports = app => app.use('/brand', router);