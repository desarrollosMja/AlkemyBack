require("dotenv").config()

const config = {
    PORT: process.env.PORT || 8080,
    MYSQL_HOST: process.env.DB_HOST,
    MYSQL_USER: process.env.DB_USER,
    MYSQL_DB_NAME: process.env.DB_NAME
}

module.exports = { config }