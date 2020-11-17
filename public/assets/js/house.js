const session = require('express-session');

app.use(
    session({
        secret: 'Fine keep your secrets!',
        resave: false,
        saveUninitialized: false
    })
);


//House data
const house = [{
        title: 'Gryffindor',
        selected: true,
        key: 10
    },

    {
        title: 'Slytherin',
        selected: true,
        key: 20
    },

    {
        title: 'Hufflepuff',
        selected: true,
        key: 30
    },

    {
        title: 'Ravenclaw',
        selected: true,
        key: 40
    }
];


app.get('/quiz', (req, res) => {
    if (req.session.houseChoice) {
        req.session.houseChoice
    } else {

    }
})