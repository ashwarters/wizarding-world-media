const logoutHandler = function(event) {
    event.preventDefault()
    fetch('/api/user/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    }).then(function() {
        document.location.replace('/login')
    })
}

document.querySelector('.logoutButton').addEventListener('click', logoutHandler);