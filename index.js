const express = require('express');
const { PORT } = require('./config');
const htmlRouter = require('./routes/htmlRouter');
const exphbs = require('express-handlebars')


const app = express();

app.use(express.static('public'));

app.use(htmlRouter);

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');



app.get('/', (req, res) => {
    res.render('login');
});

app.get('/home', (req, res) => {
    res.render('quiz')
});


//route for getting quiz results (set up info from quiz code)
app.get('/house', (req, res) => {
    return res.render('home', { layout: 'house' })
});


//PORT set to 3001 for now (open to whichever)
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});