const { UsersServices } = require("../services")
const DbManager = require("../../../utils/daos/mysql/operations.js")

class UsersController{
    async create(req,res,next){
        try {
            await DbManager.newUserTable()
        } catch (error) {
            res.json({error: error})
        }
    }
}

module.exports = new UsersController()