const dashboardHandler = function(event) {
    event.preventDefault()

    document.location.replace('/login')
    console.log('Success!')

}




document.querySelector('.sendToLogin').addEventListener('click', dashboardHandler);