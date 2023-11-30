/* const mongoose=require("mongoose");
const connect=mongoose.connect("mongodb+srv://babedesaleng15:Dhkoo0932260153@cluster0.bdmif5z.mongodb.net/login")
connect.then(()=>{
    console.log("data base  conected");
});

const loginSchema=  new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }

     

});

const collection= new mongoose.model("users",loginSchema)

module.exports= collection;
 */