const conn = require('../../database/database');
const { Model , Sequelize, DataTypes } = require('sequelize');

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userlogin:{
        type: DataTypes.STRING(50),
        allowNull: true
    },
    password:{
        type: DataTypes.STRING(50),
        allowNull: true
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
        type: DataTypes.INTEGER,
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
    modelName: "user"
})

module.exports = User;