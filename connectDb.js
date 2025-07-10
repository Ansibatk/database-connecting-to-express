const mongoose = require('mongoose');
const connectDb=async()=>{
    const con=await mongoose.connect('mongodb+srv://ansibatk:ansibatk@cluster0.5vwdvkf.mongodb.net/entry')
}
console.log('MongoDB connected');

module.exports=connectDb;