const User = require('./User');
const House = require('./House');

User.belongsTo(House, {
    foreignKey: 'houseId'
})

module.exports = { User, House };