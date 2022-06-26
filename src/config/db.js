const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('conduit', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
})

module.exports = sequelize
