const express = require('express');
const app = express();

app.use(require('cors')())

app.use(express.json());
require('./src/app/controllers/index')(app);

app.listen(3325, () => {
    console.log('Server Started');
})