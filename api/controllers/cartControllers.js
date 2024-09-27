
const Carts = require("../models/Carts");

// get carts using email
const getCartByEmail = async(req, res) => {
    try {
        const email = req.query.email;
        // console.log(email);
        const query = {email: email};
        const result = await Carts.find(query).exec();
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//  post a card when addToCard buttion clicked
const addToCart = async (req,res) => {
    const {menuItemId,name,price,recipe,image,category,quantity,email} = req.body;
    try {
        // exsistin menu item
        const exsistingCartItem = await Carts.findOne({menuItemId});
        if(exsistingCartItem){
            return res.status(400).json({message:"product alresy axsisting card!"})
        }
        const cartItem = await Carts.create({
            menuItemId,name,price,recipe,image,category,quantity,email
        })
        res.status(201).json(cartItem)

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// const update a cart
const updateCart = async (req,res) => {
    const cartId = req.params.id;
    const {menuItemId,name,price,recipe,image,category,quantity,email} = req.body;
    try {
        const updatedCart = await Carts.findByIdAndUpdate(
            cartId,{menuItemId,name,price,recipe,image,category,quantity,email},{
                new:true,runValidators:true
            }
        )
        if(!updatedCart){
            res.status(404).json({message:"Cart item not found!"})
        }
        res.status(200).json(updatedCart)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// delete a cart
const deleteCart = async (req,res) => {
    const cartId = req.params.id
    try {
        const deletedCart = await Carts.findOneAndDelete(cartId);
        if(!deletedCart){
            res.status(401).json({message:"Cart item not found!"})
        }
        return res.status(200).json({message:"Cart item deleted successfully!"})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


// get single recipe
const getSingleCart = async (req,res) => {
    const cartId = req.params.id;
    try {
        const cartItem = await Carts.findById(cartId);
        res.status(200).json(cartItem)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


module.exports = {
    getCartByEmail,
    addToCart,
    deleteCart,
    updateCart,
    getSingleCart
}