const express = require("express");
const Menu = require("../models/Menu");
const router = express.Router();

const menuControllers = require('../controllers/menuControllers')

// get all menu items
router.get('/',menuControllers.getAllMenuItem)
// post a menu item
router.post('/',menuControllers.postMenuItem)
// delete a menu item
router.delete('/:id',menuControllers.deleteMenuItem);
// get a single menu
router.get('/:id',menuControllers.getSingleItem)
// update a menu item
router.patch('/:id',menuControllers.updateMenuItem)




module.exports = router;




