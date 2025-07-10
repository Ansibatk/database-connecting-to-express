const mongoose = require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
       
    },
    age:{
        type:Number,
       
    },
    address:{
        type:String,
        required:true,
       
    },
    dob:{
        type:Date,
    },
    isverified:{
        type:Boolean,
    },
   
})
const User=mongoose.model("User",userSchema)
module.exports=User;