import express from "express";



const router = express.Router();


router.get("/send", (req,res ) =>{
    res.send("send messages endpoint");
});






export default router;


// Exports the router object so it can be used in other parts of the application.