//require express router to create routes for api and pages
const router = require('express').Router();

const apiRoutes = require('./api');

const dashboardRoutes = require('./dashboardRoutes.js');

router.use('/', dashboardRoutes);

router.use('/api', apiRoutes);

module.exports = router;