const InputsServices = require("../services")

class InputsController{
    async newOperation(req,res,next){
        try {
            const newOperation = await InputsServices.newOperation(req.body)
            res.json(newOperation)
        } catch (error) {
            res.json({error: error})
        }
    }

    async getOperations(req,res,next){
        try {
            const operations = await InputsServices.getOperations()
            res.json(operations)
        } catch (error) {
            res.json({error: error})
        }
    }

    async modifyOperation(req,res,next){
        try {
            const operations = await InputsServices.modifyOperation(req.body)
            res.json(operations)
        } catch (error) {
            res.json({error: error})
        }
    }
}

module.exports = new InputsController()