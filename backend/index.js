require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors({
    origin:"0.0.0.0/0"}))



app.listen(process.env.PORT,()=>{
    console.log("server is running")
})