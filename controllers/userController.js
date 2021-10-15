const User = require('../models/User');

const UserCtr = {};


UserCtr.getUsers= async (req, res) => {
    const user = await User.find();
    res.json(user)
}

UserCtr.createUser= async(req, res) => { 
    const {_id,name,role,email,user,password,state} = req.body;
    const newUser = new User(
        {
            _id,
            name,
            role,
            email,
            user,
            password,
            state
        }
    )
    await newUser.save();
    res.json({message:`usuario con nombre ${newUser.name}, ha sido guardada`})
}

UserCtr.getUser = async(req,res) =>{
    const user = await User.findById(req.params.id);
    res.json(user)
}

UserCtr.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({message:'user-delete'})
};

UserCtr.updateUser = async (req, res) => {
    const {    
        name,
        role,
        email,
        user,
        password,
        state
    } = req.body;
    
    await User.findOneAndUpdate({_id:req.params.id},
        {
            name,
            role,
            email,
            user,
            password,
            state  
        }
    )
    res.json({message:'user-update'})
}



module.exports = UserCtr;