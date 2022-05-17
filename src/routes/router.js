const usersIndex = require("../components/users")
const inputsIndex = require("../components/inputs")

module.exports = app => {
    usersIndex(app)
    inputsIndex(app)
}