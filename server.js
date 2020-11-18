//dependencies
const express = require('express');
const { PORT } = require('./config/connection');
const htmlRouter = require('./routes/htmlRouter');
const exphbs = require('express-handlebars');
const session = require('express-session');

//express app
const app = express();

app.use(express.static('public'));

app.use(htmlRouter);

//working with handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


//express-session
app.use(
    session({
        secret: 'Fine keep your secrets!',
        resave: false,
        saveUninitialized: false
    })
);


//route for dashboard page
app.get('/', (req, res) => {
    res.render('signup');
});


//route for login page
app.get('/login', (req, res) => {
    res.render('login');
});

//route for signup page
app.get('/signup', (req, res) => {
    res.render('signup');
});

//route for playlists page
app.get('/playlists', (req, res) => {
    res.render('playlists');
});

//route for house page
app.get('/house', (req, res) => {
    res.render('house');
});

app.get('/quiz', (req, res) => {
    res.render('quiz');
});


//PORT set to 3001 for now (open to whichever)
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});