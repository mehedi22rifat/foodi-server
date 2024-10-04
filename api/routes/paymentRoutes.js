const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Payments = require("../models/Payments");
// token
const verifyToken = require("../middlewares/verifyToken");
const Carts = require("../models/Carts");
// const ObjectId = mongoose.Types.ObjectId;

router.post("/", verifyToken, async (req, res) => {
  const payment = req.body;
//   console.log("Body", payment);
  try {
    const paymentRequest = await Payments.create(payment);

    // console.log("PaymentRequest", paymentRequest);

    // delete cart after payment
    const cartsId = payment.cartItems;
    console.log("CartId: ", cartsId);

    const deletedCartRequest = await Carts.deleteMany({
      _id: { $in: cartsId },
    });

    res.status(200).json({ paymentRequest, deletedCartRequest });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});


// get traking order data
router.get('/', verifyToken, async (req,res) => {
  const email = req.query.email;
  const query = {email:email}
  try {
    const decodedEmail = req.decoded.email
    if(email !== decodedEmail){
      res.status(403).json({message:"forbiden access"})
    }
    const result = await Payments.find(query).sort({createdAt:-1}).exec();
    res.status(200).json(result)

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
})


module.exports = router;
