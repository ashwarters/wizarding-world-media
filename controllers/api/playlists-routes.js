const router = require('express').Router();
const axios = require('axios');



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

router.get('/playlists/:id', (req, res) => {
    const houseId = req.params.id
    axios.get(`https://api.spotify.com/v1/playlists/${houseId}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer BQA5uTccRbY-ao596KC8WRAOMVUN8epY1oag9nOVyYHCIRPetBUM7_sGOdFJpqJ0hVYhVbu0876e6ghqWo-gMLTYznUY7Nxtz5Rqj28eOHGtdPC0IN9Ks1UQC40TQ6hTUR9x6c__HtnXHybO',
            'Accept': 'application/json'
        }
    }).then(data => {
        console.log('hello1', data.data);
        res.json(data.data)
            //res.render('playlists', data)
    }).catch(err => {
        console.log(err);
    });
})



module.exports = router;