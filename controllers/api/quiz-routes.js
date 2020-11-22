const router = require('express').Router();
const { User, House } = require('../../models');

router.get('/', (req, res) => {
    res.render('quiz', { layout: 'main' })
});



router.put('/:house', (req, res) => [
    User.update(req.body, {
        where: {
            username: req.session.username
        },
        house_id: req.params.house
    })
    .then((houseData) => {

        res.render('playlists.css', { layout: 'main', houseData })
    })

])

// looking at an example, wanted to try this...
router.get('/quiz'), (req, res) => {

    res.render('quiz', {
        isListEnabled: true,
        style: 'quiz.css',
    
    })
}



module.exports = router;