const UsersServices = require("../services")

class UsersController{
    async create(req,res,next){
        try {
            const newUserId = await UsersServices.newUser(req.body)
            if (newUserId == false){
                res.json({operation: "Failed"})
            } else {
                res.json({operation: "Success", userId: newUserId})
            }
        } catch (error) {
            res.json({error: error})
        }
    }

    async login(req,res,next){
        try {
            const userFinded = await UsersServices.login(req.body)
            if (userFinded == true){
                res.json({access: "Granted"})
            } else res.json({access: "Denied"})
        } catch (error) {
            res.json({error: error})
        }
    }
}

module.exports = new UsersController()