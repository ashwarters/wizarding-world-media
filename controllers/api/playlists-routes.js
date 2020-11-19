const router = require('express').Router();

const { User, House } = require('../../models');



//houseseed.js has the playlist url code for each house defined as houseData
//houseData has a housename key with the hogwarts house value (gryffindor, etc.)
//houseData also has a playlist key with the spotify url code



// const spotifyId = '3defb4c0a6b2455e81596c332d9132c8'

// const spotifySecret = '0e10c7c636a3464fbc2ec132d53f01ed'


// function getPlaylists() {
//     const getPlaylistsUrl = 'https://api.spotify.com/v1/'
// }




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