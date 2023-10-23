const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        validate : /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/
    },
    email : {
        type : String,
        required : true,
        unique : true,
        index: true,
        validate : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    password : {
        type : String,
        required : true,
        validate : /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/
    }
})

const User = mongoose.model('users', userSchema)

module.exports = User