const express = require("express")
const app = express()
const session = require('express-session')
const MongoStore = require('connect-mongo');
require('dotenv').config()
const PORT = process.env.PORT || 4000
const router = require("./router")
const connectDB = require("./config/db")


app.use(express.json())
app.use(router)
connectDB()
app.use(session({
    secret: process.env.SESSIONSCREET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 24*60*60*1000 },
    name:"BlogCookie",
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL })
  }))
app.listen(PORT, ()=>{
console.log(`The server is running at http://localhost:${PORT}`)
})
// http://localhost:3000