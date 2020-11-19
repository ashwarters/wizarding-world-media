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
    .then(affectedRows => {
        if (affectedRows > 0) {
            res.status(200).end()
        }
    })

])

module.exports = router;