const express = require("express")
const router = express.Router()
const auth = require("./auth")
router.use("/auth/v1", auth)
module.exports = router
// http://localhost:3000/api/auth/v1