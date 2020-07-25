const conn = require('../../database/database');
const { Model , Sequelize, DataTypes } = require('sequelize');

const Client = require('./client');

class Brand extends Model {}

Brand.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    client_id:DataTypes.INTEGER,
    nome:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    cpf:{
        type: DataTypes.STRING(11),
        allowNull: true
    },
    cnpj:{
        type: DataTypes.STRING(20),
        allowNull: true
    },
    telefone:{
        type: DataTypes.STRING(20),
        allowNull: true
    },
    celular:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(60),
        allowNull: false
    },
    endereco:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,

}, {
    freezeTableName: true,
    sequelize: conn,
    modelName: "brand"
})

Client.hasMany(Brand);
Brand.belongsTo(Client, {
    foreignKey:"client_id"
});

module.exports = Brand;