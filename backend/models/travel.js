const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    UserName:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[20,'name cannt be more 20'],
    }, 
    UserPassword:{
        type: String,
        required:[true,'must provide password'],
        minlength:[8,'password should be longer than 8 characters'],
    },
});


module.exports = mongoose.model('Users',UserSchema)