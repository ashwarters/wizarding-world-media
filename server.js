const express = require('express');
const { PORT } = require('./config');
const htmlRouter = require('./routes/htmlRouter');
const exphbs = require('express-handlebars')


const server = express();

server.use(express.static('public'));

server.use(htmlRouter);

server.engine('handlebars', exphbs({ defaultLayout: 'main' }));
server.set('view engine', 'handlebars');


//route for getting quiz results (set up info from quiz code)
server.get('/your-house', (res, req) => {
    return res.render()
})



//PORT set to 3001 for now (open to whichever)
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});