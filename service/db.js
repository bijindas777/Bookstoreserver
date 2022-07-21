//import mongoose
const mongoose = require('mongoose')
//create connection
mongoose.connect('mongodb://localhost:27017/Bookstores',{
    useNewUrlParser:true
})

//db model
const User = mongoose.model('User',{
    username:String,
    userid:String,
    password:Number
   

})
module.exports={
    User
}
