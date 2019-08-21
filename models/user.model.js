// user.model.js
const mongoose = require('mongoose');
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    regno:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    password:{
        type:String,
        required:true,
        index:true,
    },
    roomno:{
        type:String,
        required:true,
        index:true,
    },
    credits:{
        type:String,
        index:true,
    },
    upiKey: {               /* TODO */
        type: String,
    },
    cycleID: {              /* Foreign Key */
        type: String,
    }
});

// Export the model
module.exports = mongoose.model('User', userSchema);
