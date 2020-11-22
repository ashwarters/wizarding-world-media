const router = require('express').Router();

const { User, House } = require('../../models');

router.get('/', (req, res) => {
    User.findOne({
        where: {
            username: req.session.username
        },
        include: [
            House
        ]
    }).then(dbUser => {
        console.log(dbUser);
        res.render('playlists', dbUser)
    })
})

module.exports = router;