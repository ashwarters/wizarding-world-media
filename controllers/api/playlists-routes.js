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

router.get('/playlists', (req, res) => {
    axios.get('https://api.spotify.com/v1/playlists/6e5TyQ5YhFpo5SsnkrR8Yt', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer BQCIuHojWy2C7_hFuTajH29M_DQGynlSXx0MAgxEYVStJIpoUTc3cC-dZFQ1Mh75GZd0itUoHEPwSzMYu-X1KYTEMoXKK0nW6cqT6YzqvY0WcnjrVU7aEq0TxNMFOkRSDKMEuRIJXMNHMoh-',
            'Accept': 'application/json'
        }
    }).then(data => {
        console.log('hello1', data.data);
        res.render('playlists', data)
    }).catch(err => {
        console.log(err);
    });
})



module.exports = router;