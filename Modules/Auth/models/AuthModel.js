module.exports = (database, dbType) => {
    return  database.define("users", {
        id: {
            type : dbType.INTEGER,
            autoIncrement : true,
            primaryKey : true
        },
        phone: {
            type : dbType.STRING,
            allowNull: false,
            unique: true,
            validate :{
                is : ["^[0-9]{11}$"]
            }
        },
        code: {
            type : dbType.STRING,
            allowNull: true,

        }
    })
}


