const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    nik : { 
        type : String
    },
    fullname : {
        type : String
    },
    username : {
        type : String
    },
    password : {
        type : String
    },
    bloodtype : {
        type : String
    },
    phone : {
        type : String
    },
    address : {
        type : String
    },
         : {
        type : String
    },
    profilephoto : {
        type : String
    },
    email : {
        type : String
    },
    role : {
        type : Number
    }
})

module.exports = mongoose.model('access', userSchema)