const { MongoClient } = require("mongodb");

const url = "mongodb+srv://root:root@usuarios.5kzs4.mongodb.net/Alkemy?retryWrites=true&w=majority";
const client = new MongoClient(url);
const dbName = "Alkemy";


module.exports = { client, dbName };