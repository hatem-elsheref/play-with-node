require('dotenv').config()

module.exports = {
     development: {
         db: {
             username: process.env.DB_USER,
             password: process.env.DB_PASS,
             hostname: process.env.DB_HOST,
             database: process.env.DB_NAME,
             driver  : process.env.DB_DRIVER,
         },
         logging: true,
     },
     production: {
         db: {
             username: process.env.DB_USER,
             password: process.env.DB_PASS,
             hostname: process.env.DB_HOST,
             database: process.env.DB_NAME,
             driver  : process.env.DB_DRIVER,
         },
         logging: false,
     },
     HTTP: {
        HTTP_OK            :200,
        HTTP_CREATED       :201,
        HTTP_NOT_FOUND     :404,
        HTTP_NOT_AUTHORIZED:200,
        HTTP_SERVER_ERROR  :500,
    },
}
