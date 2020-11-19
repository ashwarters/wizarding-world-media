const router = require('express').Router();

const userRoutes = require('./user-routes');
const houseRoutes = require('./house-routes');

router.use('/user', userRoutes);
router.use('/house', houseRoutes);

module.exports = router;