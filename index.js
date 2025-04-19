const express = require("express")
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 4000
const router = require("./router")


app.use(express.json())
app.use(router)
app.listen(PORT, ()=>{
console.log(`The server is running at http://localhost:${PORT}`)
})
// http://localhost:3000