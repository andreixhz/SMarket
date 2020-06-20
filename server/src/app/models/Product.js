const conn = require('../../database/database');
const { Model , Sequelize, DataTypes } = require('sequelize');

class Product extends Model {}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code_bar:{
        type: DataTypes.STRING(20),
        allowNull: true
    },
    name:{
        type: DataTypes.STRING(50),
        allowNull: true
    },
    description:{
        type: DataTypes.STRING(50),
        allowNull: true
    },
    brandId:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    image:{
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,

}, {
    freezeTableName: true,
    sequelize: conn,
    modelName: "product"
})

module.exports = Product;