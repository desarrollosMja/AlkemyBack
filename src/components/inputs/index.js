const router = require("express").Router()
const InputsController = require("./controller")

module.exports = app => {
    app.use("/api/inputs", router)
}