const router = require('express').Router();

const userRoutes = require('./user-routes');
const houseRoutes = require('./house-routes');
const quizRoutes = require('./quiz-routes');
const playlistRoutes = require('./playlists-routes');

router.use('/user', userRoutes);
router.use('/house', houseRoutes);
router.use('/quiz', quizRoutes);
router.use('/playlist', playlistRoutes);

module.exports = router;