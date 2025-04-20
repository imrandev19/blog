const { default: mongoose } = require("mongoose");

async function connectDB(){
    mongoose.connect(process.env.DATABASE_URL). then(()=>{
        console.log("DB Connected")
    }).catch((error)=>{
        console.log(error)
    })
}
module.exports = connectDB


