const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const  Payments = require('../models/Payments')
const ObjectId = mongoose.Types.ObjectId;

// token
// const verifyToken = require('../middlewares/verifyToken');
// const Carts = require("../models/Carts");



router.post('/', async(req,res) => {
    const payData  = req.body;
    try {
        const paymentRequest = await Payments.create(payData)

        // delete cart after payment
        // const cartsId = payData.cartItems.map( id => ObjectId(id));
        // const deletedCartRequest = await Carts.deleteMany({_id: {$in:cartsId} })
       
        res.status(200).json(paymentRequest)

    } catch (error) {
        res.status(404).json({message:error.message})
    }
})


module.exports = router;
