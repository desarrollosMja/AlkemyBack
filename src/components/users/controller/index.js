const UsersServices = require("../services")

class UsersController{
    async create(req,res,next){
        try {
            const newUserId = await UsersServices.newUser(req.body)
            if (newUserId == false){
                res.json({operation: "Failed"})
            } else {
                req.session.user = req.body.email
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
                req.session.user = req.body.email
                res.json({access: "Granted"})
            } else res.json({access: "Denied"})
        } catch (error) {
            res.json({error: error})
        }
    }

    async closeSession(req,res,next){
        try {
            req.session.destroy(function(err) {
                if (err) throw new Error(err)
                res.json({session: "closed"})
            })
        } catch (error) {
            res.json({error: error})
        }
    }
}

module.exports = new UsersController()