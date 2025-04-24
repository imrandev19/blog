const emailValidation = require("../helpers/emailValidation")
const userSchema = require("../models/userSchema")
const argon2 = require('argon2');
const signupController = async (req,res)=>{
    
    let {username,password,email}= req.body
    console.log(password)
   try {
    const hash = await argon2.hash(password);
    if(!emailValidation(email)) {
       return res.status(400).json({success:false, message: `${email} is an invalid mail` })
       }
       let user = new userSchema({
        username,password: hash,email
       })
       await user.save()
       return res.status(201).json({success:true, message: "Data send successfully to the server", user: user})
   } catch (error) {
    return res.status(500).json({success:false, message: error.message || "Something Went Wrong" })
   }
    
}

const loginController = async (req,res)=>{
    let {email,password}= req.body
    try {
        let existingUser = await userSchema.findOne({email})
        if(!existingUser){
            return res.status(400).json({success:false, message: "This Email is not belong to our database"}) 
        }else{
            if (await argon2.verify(existingUser.password, password)) {
                console.log(existingUser)
                let userdata ={
                    id:existingUser._id,
                    username: existingUser.username,
                    email:existingUser.email,
                    role:existingUser.role
                }
                req.session.user = userdata
                return res.status(200).json({success:true, message: "Login Successfully", data: userdata})
              } else {
                return res.status(400).json({success:false, message: "Wrong Password"})
              }
        }
    } catch (error) {
        return res.status(500).json({success:false, message: error.message || "Something Went Wrong" })
    }
}

module.exports = {signupController, loginController}