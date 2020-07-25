const conn = require('../../database/database');
const { Model , Sequelize, DataTypes } = require('sequelize');

class Sales extends Model {}

Sales.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id:{
        type: DataTypes.STRING(20),
        allowNull: true
    },
    to_id:{
        type: DataTypes.STRING(20),
        allowNull: true
    },
    value:{
        type: DataTypes.FLOAT
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,

}, {
    freezeTableName: true,
    sequelize: conn,
    modelName: "sales"
})

module.exports = Sales;