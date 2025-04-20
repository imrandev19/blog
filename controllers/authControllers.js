const emailValidation = require("../helpers/emailValidation")
const userSchema = require("../models/userSchema")

const signupController = async (req,res)=>{
    
    let {username,password,email}= req.body
    console.log(password)
   try {

    if(!emailValidation(email)) {
        res.status(400).json({success:false, message: `${email} is an invalid mail` })
       }
       let user = new userSchema({
        username,password,email
       })
       await user.save()
       return res.status(201).json({success:true, message: "Data send successfully to the server", user: user})
   } catch (error) {
    res.status(500).json({success:false, message: error.message || "Something Went Wrong" })
   }
    
}

module.exports = {signupController}