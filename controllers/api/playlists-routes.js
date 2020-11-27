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
            'Authorization': 'Bearer BQC9UyYVvvntnNu7BEMa8QJCD9vHWD-8yE7mJAUGcT9Kd_b9P_078Cza1sMOHpNV2xf_h_8KCAmr_QhCIAR3U4PnRb2oFl_Q9PI8RyWk4oCWiQZ3Y9GMfY9uwVZOnqygdQLF_HEkGjHoo_XO',
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