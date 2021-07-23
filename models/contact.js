//1requeire mongoose

const mongoose = require ('mongoose')

//2require Schema
const Schema = mongoose.Schema

const contactSchema = new Schema ({
    name :{
        type : String,
        required: true
    },
    email :{
        type : String,
        required: true
    },
  
    phone :{
        type : Number,
        required: true
    },
    pwd :{
        type : String,
    },
})
 
module.exports = mongoose.model('contact', contactSchema)
