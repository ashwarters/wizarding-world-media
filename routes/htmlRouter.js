const path = require('path');
const express = require('express');



const htmlRouter = express.Router();


htmlRouter.get('/', (require, res) => {
    const htmlPath = path.resolve(__dirname, '../public/index.html');
    console.log(htmlPath);
    res.sendFile(htmlPath);
});



module.exports = htmlRouter;