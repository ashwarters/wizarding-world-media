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
            'Authorization': 'Bearer BQAEXoQTN1BBSMqTTCrmrwQlFp-vcisWd4SeeWM5Ha5uATgUMOjTIwrqo5dSevbn_ZexTpEzUgg5tXCm2jiONDOBZ8SRzreN2WBkXnF_AVkORieNLfdNdQpf-qleelvktR21u1rxUSxHXxHm',
            'Accept': 'application/json'
        }
    }).then(data => {
        console.log('hello1', data.data);
        res.json(data.data)
    }).catch(err => {
        console.log(err);
    });
})



module.exports = router;