const express = require('express');
const router = express.Router();
const path = require('path')

router.get('/logo', async(req, res) => {
    return res.sendFile(path.dirname(require.main.filename || process.mainModule.filename) + '\\cdn\\Logo.png');
})


module.exports = app => app.use('/cfg', router);