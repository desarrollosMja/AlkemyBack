const db = require("./config.js").client

class DbManager{
    async newInputTable(){
        try {
            await db.schema.createTable("personalBudget", table => {
                table.increments("operationId")
                table.date("date")
                table.string("description")
                table.float("amount")
                table.string("type")
                table.string("userEmail")
                table.foreign("userEmail").references("userEmail").inTable("users")
            })
        } catch (error) {
            console.log(error)
        }
    }

    async newUserTable(){
        try {
            await db.schema.createTable("users", table => {
                table.increments("operationId")
                table.string("userEmail")
                table.string("userPass")
            })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new DbManager()