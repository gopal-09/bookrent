require("dotenv").config()
const express=require('express')
const app=express()
app.use(express.json())
const RtBook = require("./src/routes/book")
const RtRent = require("./src/routes/rent")
const RtUser = require("./src/routes/user")
//app.use("/rentapp", RtBook)
// app.use("/rentapp", RtRent)
// app.use("/rentapp", RtUser)
app.use('/rentapp/user',RtUser)
app.get("/rentapp", (req, res) => {
    res.send("Welcome to Rent Book App")
  })
  
app.listen(5000,(req,res)=>console.log('server hitt'))