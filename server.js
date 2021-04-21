const defaultSetting = require('./Config/default')
const env = process.env.APP_ENV || defaultSetting.env
const config = require('./Config/config')[env]
const express = require('express')
const server = express()
const parser = require('body-parser')
const logger = require('morgan')
const assert = require('assert')
const fs = require('fs')
const path = require('path')
const db = require('./Config/database.js')
const authRoute = require('./Modules/Auth/routes/User')


server.use(parser.urlencoded({extended : true}))
server.use(parser.json())
if (config.logging)
    server.use(logger('dev', {
        stream: fs.createWriteStream(path.join(__dirname, 'log', 'access.log'), { flags: 'a' })
    }))



server.use('/api/v1/', authRoute)


//
//
// server.get('/db', (req, res)=>{
//     User.findAll().then(users => {
//         res.json(users)
//     })
// })
//
//
// server.post('/db', (req, res)=>{
//     assert.notEqual(null, req.body.phone)
//
//     res.json({msg: 'empty'})
// })


function start(){
    return `Application running now on ${process.env.APP_HOST || defaultSetting.host}:${process.env.APP_PORT || defaultSetting.port}`
}
server.listen(process.env.APP_PORT || defaultSetting.port,() => {
    console.log(start())
})





