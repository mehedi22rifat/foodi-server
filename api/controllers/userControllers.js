const User = require("../models/User")


// get all users
const getAllUsers = async (req,res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


// post a new user
const creatUser = async (req,res) => {
    const user = req.body;
    const query = {email:user.email};
     try {
        const existingUser = await User.findOne(query);
        if(existingUser){
            res.status(302).json({message:"User already existing!"})
        }
        const result = await User.create(user);
        res.status(200).json(result)
        
     } catch (error) {
        res.status(500).json({message:error.message})
     }
}



module.exports ={
  getAllUsers,
  creatUser,
}