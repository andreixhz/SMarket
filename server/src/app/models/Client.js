const conn = require('../../database/database');
const { Model , Sequelize, DataTypes } = require('sequelize');

class Client extends Model {}

Client.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    sobrenome:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    sexo:{
        type: DataTypes.CHAR,
        allowNull: false
    },
    nascimento:{
        type: DataTypes.DATEONLY,
        allowNull: false
    }, 
    cpf:{
        type: DataTypes.STRING(11),
        allowNull: false
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
    modelName: "client"
})

module.exports = Client;
