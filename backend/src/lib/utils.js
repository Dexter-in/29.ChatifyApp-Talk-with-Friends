import jwt from 'jsonwebtoken';



export const generateToken =  (userId,res) => {
   const {JWT_SECRET} = process.env;
   if(!JWT_SECRET){
      throw new Error("JWT_SECRET is not configured");
   }
   const token = jwt.sign({userId},JWT_SECRET,{
    expiresIn:"7d",
   });
   // This code creates a JWT (JSON Web Token) using the user's ID and a secret key from environment variables.
// The token will expire in 7 days ("7d").
// The generated token can be used for user authentication in the application.


   res.cookie("jwt",token,{
    maxAge: 7 * 24 * 60 * 60 * 1000,//MS
    httpOnly: true, // prevent xss attacks:cross site scripting 
    sameSite : "strict",//prevent CSRF attacks
    secure : process.env.NODE_ENV === "development" ? false : true,

})

return token;
};


