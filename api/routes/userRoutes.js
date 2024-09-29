const express = require('express');
const router = express.Router();



const userControllers = require('../controllers/userControllers')
const verifyToken = require('../middlewares/verifyToken');
const verifyAdmin = require('../middlewares/verifyAdmin');


router.get('/',verifyToken,verifyAdmin, userControllers.getAllUsers);
router.post('/',userControllers.createUser);
router.delete('/:id',verifyToken,verifyAdmin, userControllers.deleteUser);
router.get('/admin/:email',verifyToken, userControllers.getAdmin);
router.patch('/admin/:id',verifyToken,verifyAdmin, userControllers.makeAdmin);



// export router
module.exports = router;