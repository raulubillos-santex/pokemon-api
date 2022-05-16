const {Sequelize} = require('sequelize');

module.exports = new Sequelize({
    dialect: process.env.DBTYPE || 'mysql',
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database:process.env.DBSCHEMA
})