const conn = require('../../database/database');
const { Model , Sequelize, DataTypes } = require('sequelize');

const Category = require('./Category')
const SubCategory = require('./SubCategory')
const Brand = require('./Brand')

class Product extends Model {}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cat_id: DataTypes.INTEGER,
    subCat_id: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
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

Category.hasMany(Product);
Product.belongsTo(Category, {
    foreignKey:"cat_id"
});

SubCategory.hasMany(Product);
Product.belongsTo(SubCategory, {
    foreignKey:"subCat_id"
});

Brand.hasMany(Product);
Product.belongsTo(Brand, {
    foreignKey:"brandId"
});



module.exports = Product;