const router = require("express").Router()

module.exports = app => {
    app.use("/", router)

    router.get("/", (req,res) => {
        res.send("Todo ok")
    })
}