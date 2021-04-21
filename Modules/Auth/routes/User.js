const express = require('express')
const parser = require('body-parser')
const QueryTypes = require('sequelize')
const {body, validationResult} = require('express-validator')
const mobileAuthRouter = express.Router()
const {User} = require('../models/index')




mobileAuthRouter.use(parser.urlencoded({extended : true}))
mobileAuthRouter.use(parser.json())
// body('phone').isMobilePhone('ar-EG'),
mobileAuthRouter.route('/get-verification-code').post( async (request, response, next)=>{
   await User.findAndCountAll({
       where:{
           phone : request.body.phone
       }
   }).then((rows)=>{
       if (rows.count === 0){
           let user = User.create({
               phone : request.body.phone,
               code : '' + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10)
           })
           response.json({users : user, msg : 'done'})
       }else{
           response.json({users : rows.count})
       }

   }).catch((err) => {
       response.send(err)
   })


    response.json({user : user})

    // const errors = validationResult(request)

    // if (errors.isEmpty()){
    //     response.json(User.findAll())
    // }else{
    //     response.status(404).json({msg : 'not found user'})
    // }

})

module.exports = mobileAuthRouter