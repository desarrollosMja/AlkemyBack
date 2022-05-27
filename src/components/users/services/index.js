const DbManager = require("../../../utils/daos/mysql/operations.js")
const { client, dbName } = require("../../../utils/daos/mongoAtlas/config.js")

class UsersServices{
    async newUser(data){
        try {
            const tableExists = await DbManager.tableExists("users")
            if (!tableExists) await DbManager.newUserTable()

            const userExists = await DbManager.userExists(data.email)
            if (userExists == true){
                return false
            } else return await DbManager.newUser(data)
        } catch (error) {
            return error
        }
    }

    async login(data){
        try {
            const checkUser = await DbManager.checkUser(data.email, data.password)
            if (checkUser == true){
                return true
            } else return false
        } catch (error) {
            return error
        }
    }
}

module.exports = new UsersServices()
