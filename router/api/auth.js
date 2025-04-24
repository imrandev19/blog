const express = require("express")
const { signupController, loginController } = require("../../controllers/authControllers")
const router = express.Router()
// http://localhost:3000/api/auth/signup
router.post("/signup",signupController )
router.post("/login", loginController)
module.exports = router