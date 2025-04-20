const { default: mongoose } = require("mongoose");

const singlePostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Title must be required"],
    },
    content:{
        type:String,
        required:[true, "Title must be required"],
    },
    author:{
        type: mongoose.Schema.Types.ObjecId, 
        ref:"User",
        required:true
    },
    category:{
        type:String
    },
    tags:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
},
{timestamps:true}
)
module.exports = mongoose.model("Singlepost", singlePostSchema)