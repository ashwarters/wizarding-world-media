const aboutUsHandler = function(event) {
    event.preventDefault()

    document.location.replace('/api/aboutus')
}

document.querySelector('#aboutUs').addEventListener('click', aboutUsHandler);