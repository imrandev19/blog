const { default: mongoose } = require("mongoose");

let postCategotySchema = new mongoose.Schema({
categoryname:{
    type:String,
    required:[true, "Category Name must be required"],
    unique:[true, "Already Exist"]
},
image_link:{
    type:String,
    required:[true, "Category Name must be required"],
}
})  

module.exports = mongoose.model("PostCategogy", postCategotySchema)