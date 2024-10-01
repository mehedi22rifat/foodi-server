const mongoose = require('mongoose');
const {Schema} = mongoose;



const paymentsSchema = new Schema({
    transactionId:String,
    email:String,
    price:Number,
    quentity:Number,
    status:String,
    itemName:Array,
    cartItems:Array,
    menuItems:Array,
    createdAt:{
        type:Date,
        default:Date.now
    }

})

const Payment = mongoose.model('Payment',paymentsSchema);
module.exports = Payment;