const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const {Request}=require('../db/db')

app.get('/worker/showRequest',async(req,res)=>{
  const requests= await Request.findOne({})
  try {
    res.json({
      msg:"ok",
      output:requests
    })
  } catch (error) {
      res.json({
        msg:"no",
        output:error
      })
  }
})
app.post("/worker/completeTask",async (req,res)=>{
  const otp=await Request.deleteOne({otp})
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });