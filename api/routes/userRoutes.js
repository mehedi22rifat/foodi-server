const express = require('express');
const router = express.Router();



const userControllers = require('../controllers/userControllers')


router.get('/',userControllers.getAllUsers);
router.post('/',userControllers.creatUser);
router.delete('/:id',userControllers.deleteUser);
router.get('/admin/:email',userControllers.getAdmin);
router.patch('/admin/:id',userControllers.makeAdmin);



// export router
module.exports = router;