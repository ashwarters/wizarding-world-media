const axios = require('axios');

//gryffindor playlist
axios.get('https://api.spotify.com/v1/playlists/6e5TyQ5YhFpo5SsnkrR8Yt', {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BQDu3JhE-gTPvpN0hQIx9auBfLPxcgnY08S0Zj6XC_UHvMuyEH6k4PR9ij7tXbaxdoRIkXO-iWIzvCVb2CQ2-17eBM79CwkdHaJMZbYix8JjTCwEDM0NQNgv2NjbdCzrUDdse_rSS6hP9AEY',
        'Accept': 'application/json'
    }
}).then(({ data }) => {
    console.log(data);
}).catch(err => {
    console.log(err);
});




// //slytherin playlist
// axios.get('https://api.spotify.com/v1/playlists/7h3JbjwkOMRwqiZP6c4n2F', {
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer BQDu3JhE-gTPvpN0hQIx9auBfLPxcgnY08S0Zj6XC_UHvMuyEH6k4PR9ij7tXbaxdoRIkXO-iWIzvCVb2CQ2-17eBM79CwkdHaJMZbYix8JjTCwEDM0NQNgv2NjbdCzrUDdse_rSS6hP9AEY',
//         'Accept': 'application/json'
//     }
// }).then(({ data }) => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

// //ravenclaw playlist
// axios.get('https://api.spotify.com/v1/playlists/6JJ1olac8LkowhO8Epd144', {
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer BQDu3JhE-gTPvpN0hQIx9auBfLPxcgnY08S0Zj6XC_UHvMuyEH6k4PR9ij7tXbaxdoRIkXO-iWIzvCVb2CQ2-17eBM79CwkdHaJMZbYix8JjTCwEDM0NQNgv2NjbdCzrUDdse_rSS6hP9AEY',
//         'Accept': 'application/json'
//     }
// }).then(({ data }) => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })


// //hufflepuff playlist
// axios.get('https://api.spotify.com/v1/playlists/3XHXRiByjjDjckvlNfjDTd', {
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer BQDu3JhE-gTPvpN0hQIx9auBfLPxcgnY08S0Zj6XC_UHvMuyEH6k4PR9ij7tXbaxdoRIkXO-iWIzvCVb2CQ2-17eBM79CwkdHaJMZbYix8JjTCwEDM0NQNgv2NjbdCzrUDdse_rSS6hP9AEY',
//         'Accept': 'application/json'
//     }
// }).then(({ data }) => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })