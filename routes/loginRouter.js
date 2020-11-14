const router = require('express').Router();

const jsAuth = require('../public/assets/js/auth');


router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })

    .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(501).json.err;
        });
});

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: req.params.id
    })
})

.then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(501).json.err;
    });

router.post('/', (req, res) => {
    User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        .then(dbUserData => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json(dbUserData);

        });
})