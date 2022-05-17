const mysql = require("mysql")
const { config } = require("../../../config/config.js")

let con = mysql.createConnection({
  host: config.MYSQL_HOST,
  user: config.MYSQL_USER,
  password : ''
})

con.connect(err => {
  if (err) throw new Error(err)
  console.log("Connected!")
  con.query("CREATE DATABASE IF NOT EXISTS Alkemy", (err, result) => {
    if (err) throw new Error(err)
    console.log("Database created!")
  })
})

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
        Database.client = knex
        this.client = Database.client
    }
}

module.exports = new Database()