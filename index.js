const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 6001;
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
require('dotenv').config()


// midelware
app.use(cors());
app.use(express.json());


// mongodb configration using mongoose
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@demo-foodi-client.c1zoa.mongodb.net/demo-foodi-client?retryWrites=true&w=majority&appName=demo-foodi-client`
  )
  .then(
    console.log('mongodb connected successfully!')
  )
  .catch((error) => console.log(error));



  // jwt authentication
  app.post('/jwt', async (req,res) => {
    const user = req.body;
    const token = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{
      expiresIn: '1h' 
    })
    // console.log(token)
    res.send({token})
  })



  // JWT TOKEN CREATE IN TARMINNAL CODE
  // 01. node
  // 02. require('crypto').randombytes(64).tostring('hex')
  


 //   import menu routes
 const menuRoutes = require('./api/routes/menuRoutes');
 const cartRoutes = require('./api/routes/cartRoutes')
 const userRouter = require('./api/routes/userRoutes')
 app.use('/menu',menuRoutes);
 app.use('/cards',cartRoutes);
 app.use('/users',userRouter);


app.get("/", (req, res) => {
  res.send("demo foodi server running!");
});

app.listen(port, () => {
  console.log(`demo foodi server running on port ${port}`);
});
