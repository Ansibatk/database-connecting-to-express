const mongoose = require('mongoose');
const connectDb=async()=>{
    const con=await mongoose.connect('mongodb+srv://ansibatk:ansibatk@cluster0.5vwdvkf.mongodb.net/entry')
}
console.log('MongoDB connected');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
       
    },
    age:{
        type:Number,
       
    },
    address:{
        type:String,
       
    },
    dob:{
        type:Date,
    },
    isverified:{
        type:Boolean,
    },
   
})
const User=mongoose.model("User",userSchema)
module.exports=connectDb;