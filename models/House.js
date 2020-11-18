const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class House extends Model {

}

House.init({
    housename: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,

    },

    playlist: {
        type: DataTypes.STRING,
        allowNull: false,
    },


}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'house'
})
module.exports = House;