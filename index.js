const express = require('express')
const connectDb = require('./connectDB');
const User = require('./userSchema');
const app = express()
const port = 3000;

app.use(express.json());

app.get('/user-get',async(req, res)=>{
  const data=await User.find()
  res.json(data)
})
app.post('/user-add',async(req,res)=>{
  //varible lek data eduth vykunnu
  const name= req.body.name;
  const age= req.body.age;
  const address= req.body.address;
  const data=await User.create({
    //variable name and value same aayirikkumbol
    //model mayi connect cheyyunnu,ie.database mayi connect cheyyunnu
    name:name,
    age:age,
    address:address,
   })
   console.log(data);
  res.json({//api response
    message: "User added successfully",
    data,
})
})
connectDb();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
