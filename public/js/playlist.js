const playlistHandler = function() {
    const houseId = document.getElementById('playlistHouse').textContent.trim();
    console.log(houseId);
    fetch(`/api/playlist/playlists/${houseId}`, {
        method: 'get',
        headers: {

            'Content-Type': 'application/json'
        }
    }).then(response => {
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
}


document.querySelector("#playlistButton").addEventListener('click', playlistHandler)