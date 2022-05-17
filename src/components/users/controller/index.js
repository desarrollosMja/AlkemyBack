const UsersServices = require("../services")

class UsersController{
    async create(req,res,next){
        try {
            const newUserId = await UsersServices.newUser(req.body)
            if (newUserId != []){
                res.json({operation: "Success", userId: newUserId})
            } else res.json({operation: "Failed"})
        } catch (error) {
            res.json({error: error})
        }
    }
}

module.exports = new UsersController()