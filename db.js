const mongoose = require("mongoose"); 

var mongoURL = 'mongodb+srv://jinnawan:jinnawan1234@hotel.f5ftys1.mongodb.net/Mayahi'

mongoose.connect(mongoURL , {useUnifiedTopology : true, useNewUrlParser : true})

var connection = mongoose.connection

connection.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successful')
})

module.exports = mongoose