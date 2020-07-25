const express = require('express');
const router = express.Router();
const Client = require('../models/Client')

//Client.sync();

router.post('/', async(req, res) => {
   
    const data = req.body;
    if(await Client.findOne({ where: { cpf: data.cpf} })) return res.send('client_alredy_exists');
    const client = await Client.create(data);
    return res.json({status:{code:200, msg:'client_has_been_created'}, data: client});

});

//get one
router.get('/:id', async(req,res) => {

    const id = req.params.id;
    const client = await Client.findOne({
        where:{
            id
        }
    });
    if(!client) return res.status(204).json({status:{code:204, msg:'client_not_found'}});
    return res.status(200).json({status:{code:200, msg:'client_has_found'}, data: client});

});

//get all
router.get('/', async(req, res) => res.status(200).json({status:{code:200, msg:'client_getted_all'}, data:await Client.findAll({ limit: 10, offset: (req.query.page - 1) * 10 }) }))

//delete
router.delete('/:id', async(req, res) => {

    const client = await Client.findOne({where: { id: req.params.id }});

    if(!client) return res.status(200).json({status:{code:204, msg:'client_not_found'}});

    await client.destroy();
    return res.status(200).json({status:{code:200, msg:'client_deleted'}});
        
});

//atualize
router.put('/:id', async(req, res) => {

    const id = req.params.id;
    const client = await Client.findOne({ where:{ id }});
    
    if(!client) return res.status(200).json({status:{code:200, msg:'client_not_found'}});
    client.set(req.body);

    await client.save();
    return res.status(200).json({status:{code:200, msg:'client_updated'}});

});



module.exports = app => app.use('/client', router);