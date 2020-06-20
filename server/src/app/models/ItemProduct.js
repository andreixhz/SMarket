const conn = require('../../database/database');
const { Model , Sequelize, DataTypes } = require('sequelize');
const Product = require('./Product');

class ItemProduct extends Model {}

ItemProduct.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dueDate:{
        type: DataTypes.DATEONLY,
        allowNull: true
    },

    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,

}, {
    freezeTableName: true,
    sequelize: conn,
    modelName: "item_product"
})

Product.hasMany(ItemProduct);
ItemProduct.belongsTo(Product, {
  foreignKey: 'id_product'
});

module.exports = ItemProduct;