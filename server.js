const express = require('express');
const { PORT } = require('./config/connection');
const htmlRouter = require('./routes/htmlRouter');
const exphbs = require('express-handlebars')


const app = express();

app.use(express.static('public'));

app.use(htmlRouter);

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');



//route for dashboard page
app.get('/dashboard', (req, res) => {
    res.render('dashboard');
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




//PORT set to 3001 for now (open to whichever)
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});