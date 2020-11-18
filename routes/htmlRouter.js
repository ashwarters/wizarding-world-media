const path = require('path');
const express = require('express');



const htmlRouter = express.Router();


<<<<<<< HEAD
htmlRouter.get('/', (req, res) => {
    const htmlPath = path.resolve(__dirname, '../views');
=======
htmlRouter.get('/', (require, res) => {
    const htmlPath = path.resolve(__dirname, '../public/index.html');
>>>>>>> 1a784111133f36c1b91229ab5c221acb95b55924
    console.log(htmlPath);
    res.sendFile(htmlPath);
});


<<<<<<< HEAD
=======

>>>>>>> 1a784111133f36c1b91229ab5c221acb95b55924
module.exports = htmlRouter;