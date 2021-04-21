const defaultSetting = require('./default')
const env = process.env.APP_ENV || defaultSetting.env
const Sequelize = require('sequelize')
const config = require('./config')[env]

const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
    host: config.db.host,
    dialect: config.db.driver
});



module.exports = sequelize

// testConnection()
// function testConnection() {
//     try {
//         sequelize.authenticate();
//         console.log('success.');
//     } catch (error) {
//         console.log('failed.');
//     }
// }