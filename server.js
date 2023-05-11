const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();
const router = require('./router/index')
const app = express()


app.use(express.json())
app.use('/api',router)
//db connection 

mongoose.connect(process.env.URL,{
    useNewUrlParser:true
})

const db = mongoose.connection;

db.on("connection",()=>{
    console.log("error")
})

db.once("open",()=>{
    console.log(process.env.URL)
    console.log("db connected")
})

app.listen(1200,()=>{
    console.log("server started")
})

