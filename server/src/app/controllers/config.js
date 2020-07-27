const express = require('express');
const router = express.Router();
const path = require('path')

router.get('/logo', async(req, res) => {
    return res.sendFile(path.dirname(require.main.filename || process.mainModule.filename) + '\\cdn\\Logo.png');
})

router.get('/cfg', async(req,res) => {

    const config = {
        name:"Inveted Emprise",
        color: "7AB949",
        lang: "en_US"
    }

    return res.send(config);

})


module.exports = app => app.use('/cfg', router);