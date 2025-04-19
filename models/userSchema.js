const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:[true, "username must be required"],
        unique:[true, "Username is not available, try another one"],
        minlength:[3,"Username must be minimum 3 Characters"]
    },
    email:{
        type: String,
        required:[true, "Email must be required"],
        unique:[true, "Email is not available, try another one"]
    },
    password:{
        type: String,
        required:[true, "Password must be required"],
        unique:[true, "Email is not available, try another one"],
        minlength:[5,"Username must be minimum 3 Characters"]
    },
    role:{
        type: String,
        enum:["admin", "user"],
        default: "user"
    },
    isVerified:{
        type: Boolean,
        default:false
    },
    otp:{
        type:String
    }

},
{timestamps:true}
)
module.exports = mongoose.model("User", userSchema)