const House = require('../models/House.js');

const houseData = [{
        housename: 'Gryffindor',
        playlist: '6e5TyQ5YhFpo5SsnkrR8Yt'
    },
    {
        housename: 'Slytherin',
        playlist: '7h3JbjwkOMRwqiZP6c4n2F'
    },
    {
        housename: 'Ravenclaw',
        playlist: '6JJ1olac8LkowhO8Epd144'
    },
    {
        housename: 'Hufflepuff',
        playlist: '3XHXRiByjjDjckvlNfjDTd'
    }
];

const seedHouse = () => House.bulkCreate(houseData)
module.exports = seedHouse;