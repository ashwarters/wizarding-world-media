const User = require('../models/User.js');

const userData = [{
        username: 'test',
        password: 'test1234'
    },
    {
        username: 'test2',
        password: 'test1234'
    },
    {
        username: 'test3',
        password: 'test1234'
    }
];

const seedUsers = () => User.bulkCreate(userData)
module.exports = seedUsers;