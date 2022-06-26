const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING(50),
        validate: {
            isEmail: true
        },
        unique: true
    },
    username: {
        type: DataTypes.STRING(20),
        validate: {
            min: {
                args: 2
            },
            max: {
                args: 20
            }
        },
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    token: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: false
})

module.exports = User