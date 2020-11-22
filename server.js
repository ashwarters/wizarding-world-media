//dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const sequelize = require('./config/connection');
const path = require('path');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//express app
const app = express();
const PORT = process.env.PORT || 3001;

//express-session
app.use(
    session({
        secret: 'alright then, keep your secrets!',
        resave: false,
        saveUninitialized: true,
        store: new SequelizeStore({
            db: sequelize
        })
    })
);


//working with handlebars
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));


app.use(require('./controllers/'));
//PORT set to 3001 for now (open to whichever)
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
    sequelize.sync({ force: false })
});