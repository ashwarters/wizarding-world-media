const User = require('./User');
const House = require('./House');

House.hasMany(User, {
    foreignKey: 'houseId'
});


User.belongsTo(House, {
    foreignKey: 'houseId'

});
module.exports = { User, House };