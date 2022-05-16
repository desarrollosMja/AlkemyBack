const express = require("express")
const app = express()
const { config } = require("./config/config.js")
const cors = require("cors")
const routes = require("./routes/router.js")
const server = app.listen(config.PORT, () => console.log(`Listening on http://localhost:${config.PORT}`))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors("*"))

routes(app)