const conn = require('../../database/database');
const { Model , Sequelize, DataTypes } = require('sequelize');

class Category extends Model {}

Category.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING(20),
        allowNull: true
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,

}, {
    freezeTableName: true,
    sequelize: conn,
    modelName: "category"
})

module.exports = Category;