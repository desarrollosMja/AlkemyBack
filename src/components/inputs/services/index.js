const DbManager = require("../../../utils/daos/mysql/operations.js")

class InputsServices{
    async newOperation(data){
        try {
            const tableExists = await DbManager.tableExists("personalBudget")
            if (!tableExists) await DbManager.newInputTable()

            const operationCreated = await DbManager.newOperation(data)
            return operationCreated
        } catch (error) {
            return error
        }
    }

    async getOperations(){
        try {
            const operations = await DbManager.getOperations()
            return operations
        } catch (error) {
            return error
        }
    }

    async modifyOperation(data){
        try {
            const operations = await DbManager.modifyOperation(data)
            res.json(operations)
        } catch (error) {
            return error
        }
    }

    async deleteOperation(id){
        try {
            const deleteEntry = await DbManager.deleteOperation(id)
            return deleteEntry
        } catch (error) {
            return error
        }
    }
}

module.exports = new InputsServices()