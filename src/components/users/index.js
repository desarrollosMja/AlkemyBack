const router = require("express").Router()
const UsersController = require("./controller")

module.exports = app => {
    app.use("/api/users", router)

    router.get("/create", UsersController.create)
}