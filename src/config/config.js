require("dotenv").config()

const config = {
    PORT: process.env.PORT || 8080,
    MYSQL_HOST: process.env.DB_HOST || "localhost",
    MYSQL_USER: process.env.DB_USER || "root",
    MYSQL_DB_NAME: process.env.DB_NAME || "Alkemy"
}

module.exports = { config }