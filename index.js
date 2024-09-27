const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 6001;
const mongoose = require("mongoose");
require('dotenv').config()



// midelware
app.use(cors());
app.use(express.json());

// DB_USER="mdmehedi1111bd"
// DB_PASSWORD="skRki2h4brU233vs"

// mongodb configration using mongoose
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@demo-foodi-client.c1zoa.mongodb.net/demo-foodi-client?retryWrites=true&w=majority&appName=demo-foodi-client`
  )
  .then(
    console.log('mongodb connected successfully!')
  )
  .catch((error) => console.log(error));


 //   import menu routes
 const menuRoutes = require('./api/routes/menuRoutes');
 const cartRoutes = require('./api/routes/cartRoutes')
 app.use('/menu',menuRoutes);
 app.use('/cards',cartRoutes)


app.get("/", (req, res) => {
  res.send("demo foodi server running!");
});

app.listen(port, () => {
  console.log(`demo foodi server running on port ${port}`);
});
