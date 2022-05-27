const express = require("express")
const app = express()
const { config } = require("./config/config.js")
const cors = require("cors")
const routes = require("./routes/router.js")
const session = require("express-session")
const MongoStore = require("connect-mongo")
const server = app.listen(config.PORT, () => console.log(`Listening on http://localhost:${config.PORT}`))
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true}

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors("*"))
app.use(session({
    store: MongoStore.create({
        mongoUrl: config.MONGO_ATLAS_URI,
        advancedOptions
    }),
    secret: config.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 },
    rolling: true
  }))

routes(app)