const House = require('../models/House.js');

const houseData = [{
        housename: 'Gryffindor',
        playlist: '6e5TyQ5YhFpo5SsnkrR8Yt',
        gryffindor: true
    },
    {
        housename: 'Slytherin',
        playlist: '7h3JbjwkOMRwqiZP6c4n2F',
        slytherin: true
    },
    {
        housename: 'Ravenclaw',
        playlist: '6JJ1olac8LkowhO8Epd144',
        ravenclaw: true
    },
    {
        housename: 'Hufflepuff',
        playlist: '3XHXRiByjjDjckvlNfjDTd',
        hufflepuff: true
    }
];

const seedHouse = () => House.bulkCreate(houseData)
module.exports = seedHouse;