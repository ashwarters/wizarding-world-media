const router = require('express').Router();

const { User, House } = require('../models');

router.get('/', (req, res) => {
    House.findAll({})
        .then((dbHouse) => {
            const houses = dbHouse.map((house) => house.get({
                plain: true
            }))
            res.render('dashboard', {
                layout: 'main',
                houses
            })
        })

});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

module.exports = router;