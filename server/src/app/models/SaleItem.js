const conn = require('../../database/database');
const { Model , Sequelize, DataTypes } = require('sequelize');

class SaleItem extends Model {}

SaleItem.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sale_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    product_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    qtd:{
        type: DataTypes.int
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,

}, {
    freezeTableName: true,
    sequelize: conn,
    modelName: "saleItem"
})

module.exports = SaleItem;