//imoprt db
const db =require('./db')
//import jsonwebtoken
// const jwt = require('jsonwebtoken')

//register
const register = (username,userid,password)=>{
    return db.User.findOne({
        userid
    }).then(user=>{
        if(user){
            return {
                status:false,
                message:"user already exist",
                statusCode:401
            }
        }else{
                //insert to db 
                const newUser = new db.User({
                    username,
                    userid,
                    password
                  
                })
                newUser.save()
                return{
                    status:true,
                    message:"Registered succcesfully",
                    statusCode:200
                }
            
        }
    })
}


































//export
module.exports={
    register
}