const Menu = require("../models/Menu");

// get all menu
const getAllMenuItem = async (reqm, res) => {
  try {

    const menu = await Menu.find({}).sort({ createdAt: -1 });
    res.status(200).json(menu);
  } 
  
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// post a menu
const postMenuItem = async (req, res) => {
  const newItem = req.body;

  try {
    const result = await Menu.create(newItem);
    res.status(200).json(result);
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// delete a menu
const deleteMenuItem = async (req, res) => {
  const itemId = req.params.id;

  try {
    const deletedItem = await Menu.findByIdAndDelete(itemId);
    if (!deletedItem) {
      res.status(404).json({ message: "Menu is not found!" });
    }
    res.status(200).json({ message: "Menu item delete successfuly!" });
  
} catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// get a single item by id
const getSingleItem = async (req,res) => {
    const itemId = req.params.id;
    try {
        const menu = await Menu.findById(itemId)
        res.status(200).json(menu)
    } catch (error) {
        req.status(500).json({message:error.message})
    }
}

// update a menu item
const updateMenuItem = async (req,res) => {
  const itemId = req.params.id;
  const {name, recipe, image, category, price} = req.body;
    try {
      const updateMenu = await Menu.findByIdAndUpdate(itemId,
        {name, recipe, image, category, price},
        {new:true, runValidators:true}
      )

      if(!updateMenu){
        res.status(404).json({message:"menu item not found!"})
      }
      res.status(200).json({updateMenu})

    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}









module.exports = {
  getAllMenuItem,
  postMenuItem,
  deleteMenuItem,
  getSingleItem,
  updateMenuItem
};
