
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/utils.js";


export const signup = async (req,res) => {
    const {fullName ,email,password} =req.body


    try {
      if(!fullName || !email || !password ){
        return res.status(400).json({message:"All fields are required"});
      }
      if(password.length <6){
        return res.status(400).json({message:"Password must be atleast 6 characters"});
      }
      
    // check if emailis valid: regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }




   const user = await User.findOne({email});
   if(user) return res.status(400).json({message:"Email already exists"})


    //1234545 ->$gfgdhfghdgfdhfgd

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password,salt)

   const newUser = new User({
    fullName,
    email,
    password:hashPassword
   })

   if(newUser) {

    // generateToken(newUser._id,res)
    // await newUser.save()


    const savedUser = await newUser .save();
    generateToken(savedUser._id,res);
    
    res.status(200).json({
      _id:newUser._id,
      fullName:newUser.fullName,
      email:newUser.email,
      profilePic:newUser.profilePic
    });

    // toda: send a welcome email to

   }else{

    return res.status(400).json({message:"invalid user data"})

   }


     
    } catch (error) {

     console.error("error in signup controller",error);
     return res.status(500).json({message:"internal server error"})
        
    }
}