const db = require("./config.js").client

class DbManager{
    async newInputTable(){
        try {
            await db.schema.createTable("personalBudget", table => {
                table.increments("operationId")
                table.string("date")
                table.string("description")
                table.float("amount")
                table.string("type")
                table.string("userEmail")
            })
        } catch (error) {
            return error
        }
    }

    async newUserTable(){
        try {
            await db.schema.createTable("users", table => {
                table.increments("userId")
                table.string("userEmail")
                table.string("userPass")
            })
        } catch (error) {
            return error
        }
    }

    async tableExists(name){
        try {
            return await db.schema.hasTable(name)
        } catch (error) {
            return error
        }
    }

    async newUser(data){
        try {
            return await db("users").insert({userEmail: data.email, userPass: data.password})
        } catch (error) {
            return error
        }
    }

    async userExists(email){
        try {
            const user = await db("users").where({userEmail: email}).select("operationId")
            if (user.length == 0){
                return false
            } else return true
        } catch (error) {
            return error
        }
    }

    async checkUser(email,password){
        try {
            const user = await db("users").where({userEmail: email, userPass: password}).select("userId")
            if (user.length == 0){
                return false
            } else return true
        } catch (error) {
            return error
        }
    }

    async newOperation(data){
        try {
            const { date, amount, concept, type, userEmail } = data
            const insertData = await db("personalBudget").insert({
                date: date,
                description: concept,
                amount: amount,
                type: type,
                userEmail: userEmail
            })
            if (insertData.length > 0) return {operation: "success", item: {operationId: insertData[0],...data}}
        } catch (error) {
            return error
        }
    }

    async getOperations(){
        try {
            const operations = await db("personalBudget").orderBy("operationId", "desc")
            return operations
        } catch (error) {
            return error
        }
    }

    async modifyOperation(data){
        try {
            const modification = await db("personalBudget")
                                        .where("operationId","=",data.operationId)
                                        .update(data)
            if (modification == 1) return this.getOperations()
        } catch (error) {
            return error
        }
    }

    async deleteOperation(id){
        try {
            const deleteEntry = await db("personalBudget")
                                        .where("operationId", id)
                                        .del()
            return deleteEntry
        } catch (error) {
            return error
        }
    }
}

module.exports = new DbManager()