const express = require("express")
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 4000
const router = require("./router")
const connectDB = require("./config/db")


app.use(express.json())
app.use(router)
connectDB()
app.listen(PORT, ()=>{
console.log(`The server is running at http://localhost:${PORT}`)
})
// http://localhost:3000