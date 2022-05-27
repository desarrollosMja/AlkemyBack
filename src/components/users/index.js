const router = require("express").Router()
const UsersController = require("./controller")

module.exports = app => {
    app.use("/api/users", router)

    router.post("/create", UsersController.create)
    router.post("/login", UsersController.login)
    router.get("/close-session", UsersController.closeSession)
}