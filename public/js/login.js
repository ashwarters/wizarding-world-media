const loginHandler = function(event) {
    event.preventDefault()
    const username = document.querySelector('#login-form-username').value
    const password = document.querySelector('#login-form-password').value

    if (username && password) {
        fetch('/api/user/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        }).then(function() {
            console.log('youre logged in')
            document.location.replace('/api/quiz')
        }).catch(function(err) {
            console.log(err);
        })
    }
}

document.querySelector('#login-form').addEventListener('submit', loginHandler);