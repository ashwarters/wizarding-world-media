// //gryffindor playlist
// axios.get('https://api.spotify.com/v1/playlists/6e5TyQ5YhFpo5SsnkrR8Yt', {
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer BQDu3JhE-gTPvpN0hQIx9auBfLPxcgnY08S0Zj6XC_UHvMuyEH6k4PR9ij7tXbaxdoRIkXO-iWIzvCVb2CQ2-17eBM79CwkdHaJMZbYix8JjTCwEDM0NQNgv2NjbdCzrUDdse_rSS6hP9AEY',
//         'Accept': 'application/json'
//     }
// }).then(({ data }) => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// const { response } = require("express");




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



//Handlebars.registerHelper('link', function(object) {  return new Handlebars.SafeString(    "<a href='" + object.url + "'>" + object.text + "</a>"  );});

const playlistHandler = function() {
    const houseId = document.getElementById('playlistHouse').textContent.trim();
    console.log(houseId);
    fetch(`/api/playlist/playlists/${houseId}`, {
            method: 'get',
            headers: {

                'Content-Type': 'application/json'
            }
        }).then(response => {
            // console.log(response.json(), 'hey working!!');
            //console.log(response, 'hey working!!');
            response.json().then(function(data) {
                const playlistId = data.id
                    //console.log(data.id);
                document.querySelector('.playlistContainer')
                const iframe = document.createElement('iframe')
                iframe.setAttribute('src', `https://open.spotify.com/embed/playlist/${data.id}`)
                iframe.setAttribute('class', `player`)
                iframe.setAttribute('height', `380`)
                iframe.setAttribute('width', `300`)
                iframe.setAttribute('frameborder', `0`)
                iframe.setAttribute('allow', `encrypted-media`)
                iframe.setAttribute('allowtransparency', `true`)

                document.body.appendChild(iframe)

            })
        })
        // document.location.reload();
        // console.log('Hey working', data);
}


document.querySelector(".playlistButton").addEventListener('click', playlistHandler)