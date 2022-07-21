//import express
const express = require('express')
//server app creating express
const app = express()

//import dataservice
const DataService=require('./service/dataservice')


const cors = require('cors')

//cors use in app
app.use(cors({
    origin:'http://localhost:4200'
}))
//parse json data
app.use(express.json())
//import jsonweb token
// const jwt=require('jsonwebtoken')


//parse json data

// //token verify
// const jwtMiddleware =(req,res,next)=>{
// // to fetch token
// try{
//     token=req.headers['reminder-token']
//     const data=jwt.verify(token,'reminderkey123')
//     req.currentUserid = data.currentUserid
//     next()
// }catch{
//     res.status(401).json({
//         status:false,
//         statusCode:401,
//         message:'please login001'
//     })
// }
// }
//register API
app.post('/register',(req,res)=>{
    DataService.register(req.body.username,req.body.userid,req.body.password)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})
//login API
// app.post('/login',(req,res)=>{
//     DataService.login(req.body.userid,req.body.password)
//     .then(result=>{
//         res.status(result.statusCode).json(result)
//     })
// })

















//setup port number to server app
app.listen(3000,()=>{
    console.log("server started at 3000");
})