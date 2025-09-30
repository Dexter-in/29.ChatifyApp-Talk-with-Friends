 import jwt from "jsonwebtoken";
 import User from "../models/User.js";
 
 import { ENV } from "../lib/env.js";
import cloudinary from "../lib/cloudinary.js";



 export const protectRoute = async (req,res,next) => {


try {

    const token = req.cookies.jwt;
    if(!token) return res.status(401).json({message:"Unauthorized - No token provided"});
    const decoded =jwt.verify(token,ENV.JWT_SECRET);
    if(!decoded) return res.status(401).json({message:"Unauthorized - invalid token"});
    const user = await User.findById(decoded.userId).select("-password");
    if(!user) return res.status(401).json({message:"User not Found"});

    req.user = user
    next()
        
} catch (error) {

    console.log("ERROR in protective middleware",error);
    return res.status(500).json({message:"Internal server error"})


  
    
} 

 }