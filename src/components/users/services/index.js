const DbManager = require("../../../utils/daos/mysql/operations.js")

class UsersServices{
    async newUser(data){
        try {
            const tableExists = await DbManager.tableExists("users")
            if (!tableExists) await DbManager.newUserTable()
            return await DbManager.newUser(data)
        } catch (error) {
            return error
        }
    }
}

module.exports = new UsersServices()
