const router = require("express").Router()
const InputsController = require("./controller")

module.exports = app => {
    app.use("/api/inputs", router)

    router.post("/new-operation", InputsController.newOperation)
    router.get("/operations", InputsController.getOperations)
    router.put("/modify", InputsController.modifyOperation)
}