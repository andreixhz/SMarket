const express = require('express');
const app = express();

app.use(express.json());

app.listen(3325, () => {
    console.log('Server Started');
})