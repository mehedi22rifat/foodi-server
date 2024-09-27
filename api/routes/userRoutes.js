const express = require('express');
const router = express.Router();



const userControllers = require('../controllers/userControllers')


router.get('/',userControllers.getAllUsers);
router.post('/',userControllers.creatUser);




// export router
module.exports = router;