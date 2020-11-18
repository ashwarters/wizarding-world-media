const path = require('path');
const express = require('express');



const htmlRouter = express.Router();


htmlRouter.get('/', (req, res) => {
    const htmlPath = path.resolve(__dirname, '../views');
    console.log(htmlPath);
    res.sendFile(htmlPath);
});


module.exports = htmlRouter;