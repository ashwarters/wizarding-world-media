const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
    modelName: 'House'
})
module.exports = House;