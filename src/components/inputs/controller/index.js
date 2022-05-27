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

    async deleteOperation(req,res,next){
        try {
            const deleteEntry = await InputsServices.deleteOperation(req.params.operationId)
            if (deleteEntry == 1) res.json({delete: "ok"})
        } catch (error) {
            res.json({error: error})
        }
    }
}

module.exports = new InputsController()