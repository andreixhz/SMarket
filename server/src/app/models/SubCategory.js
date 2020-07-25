const conn = require('../../database/database');
const { Model , Sequelize, DataTypes } = require('sequelize');

const Category = require('./Category');

class SubCategory extends Model {}

SubCategory.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cat_id:{
        type: DataTypes.INTEGER,
        foreignKey:true
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
    modelName: "subCategory"
})

Category.hasMany(SubCategory);
SubCategory.belongsTo(Category, {
    foreignKey:"cat_id"
});

module.exports = SubCategory;