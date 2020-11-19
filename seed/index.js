const seedHouse = require('./houseseed');

const sequelize = require('../config/connection');


const seed = async() => {
    await sequelize.sync({
        force: true
    });
    console.log('db synced');
    await seedHouse();
    console.log('house seeded');
    process.exit(0)

}


seed();