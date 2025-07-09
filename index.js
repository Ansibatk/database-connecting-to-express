const express = require('express')
const connectDb = require('./connectDB')
const app = express()
const port = 4001;
app.use(express.json());

app.get('/',async(req, res)=>{
  const data=await User.find()
  res.json(data)
})
connectDb();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
