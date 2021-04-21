// import sequelize schemas
const {DataTypes} = require('sequelize')
const db = require('../../../Config/database')
const userModel = require('./AuthModel')

// create models
const User = userModel(db, DataTypes)

// make relations

// generate tables
db.sync({force : false}).then(()=>{
    console.log('tables created !')
})

module.exports = {
    User,
}