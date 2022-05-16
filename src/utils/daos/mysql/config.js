const { config } = require("../../../config/config.js")

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : config.MYSQL_HOST,
      user : config.MYSQL_USER,
      password : '',
      database : config.MYSQL_DB_NAME
    },
    pool: {min: 0, max: 10}
  })

class Database{
    static client
    constructor(){
        if (Database.client){
            this.client = Database.client
            return this
        }
        Database.client = mysql
        this.client = Database.client
    }
}

module.exports = new Database()