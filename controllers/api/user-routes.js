const router = require('express').Router();


const { User, House } = require('../../models');

router.get('/', (req, res) => {
    User.findAll({
        include: [
            House
        ]
    }).then(dbUser => {
        res.json(dbUser)
    })
})

router.post('/', (req, res) => {
    User.create({
            username: req.body.username,
            password: req.body.password
        })
        .then(dbUser => {
            req.session.save(() => {
                req.session.userId = dbUser.id;
                req.session.username = dbUser.username;
                req.session.loggedIn = true;
                res.json(dbUser)
            })
        }).catch(err => {
            console.log(err)
            res.status(500).json(err);
        });
})

///api/user/login
router.post('/login', (req, res) => {
    User.findOne({
            where: {
                username: req.body.username
            }
        })
        .then(dbUser => {
            if (!dbUser) {
                res.status(400);
                return
            }
            const validPassword = dbUser.checkPassword(req.body.password)
            if (!validPassword) {
                res.status(401);
                return
            }
            req.session.save(() => {
                req.session.userId = dbUser.id;
                req.session.username = dbUser.username;
                req.session.loggedIn = true;
                res.json({ user: dbUser })
            })
        })
})




router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end()
        })
    } else { res.status(404).end() }

})
module.exports = router;