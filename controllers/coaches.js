import User from "../models/User.js";

export const getCoaches = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (e) {
    console.error(e);
  }
};

export const createCoach = async (req, res)=>{

    const {username, password} = req.body;
    
    if(!username || !password){
        res.status(400).json({
            error:"missing fields"
        })
        return;
    }

    const user = await User.create({
        username,
        password
    })
    const userCreated = await user.save();

    res.status(201).json({
        message:"user has been created",
        user:userCreated
    })
}

export const deleteCoach = async (req, res) => {
  
    try{

      const deletedUsers = await User.deleteMany({});
      res.status(200).json({
        message:"users has been deleted"
      })

    }catch(err){
      res.status(500).json({message:"error"}) 
    }

}
