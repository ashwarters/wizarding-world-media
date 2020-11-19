const signupHandler = function(event) {
    event.preventDefault()
    const username = document.querySelector('#signup-form-username').value
    const password = document.querySelector('#signup-form-password').value

    if (username && password) {
        fetch('/api/user/', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        }).then(function() {
            console.log('youre logged in')
                //document.location.replace('/quiz')
        }).catch(function(err) {
            console.log(err);
        })
    }
}

document.querySelector('#signup-form').addEventListener('submit', signupHandler);