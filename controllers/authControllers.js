const emailValidation = require("../helpers/emailValidation")

const signupController = (req,res, )=>{
    let {username,password,email}= req.body
   try {
    
    if(!emailValidation(email)) {
        res.status(400).json({success:false, message: `${email} is an invalid mail` })
       }
   } catch (error) {
    res.status(500).json({success:false, message: error.message || "Something Went Wrong" })
   }
    
}

module.exports ={signupController}