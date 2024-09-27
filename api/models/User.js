const mongoose = require('mongoose');
const {Schema} = mongoose;



// userSchema
const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        trim: true,
        minlength: 3
    },
    photoURL: String,
    role: {
        type: String,
       enum: ['user', 'admin'],
       default: 'user'
    }
})

// creat a modle instance
const User = mongoose.model('User',userSchema);
module.exports = User;