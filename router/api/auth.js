const express = require("express")
const { signupController } = require("../../controllers/authControllers")
const router = express.Router()
// http://localhost:3000/api/auth/v1/signup
router.post("/signup",signupController )
module.exports = router