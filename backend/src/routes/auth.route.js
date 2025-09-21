import express from "express";
// Imports the Express library, which is used to create web servers in Node.js.


const router = express.Router();

router.get("/signup", (req,res) => {
    res.send({message: "Signup endpoint"});
});
// This code sets up a route handler in your Express app.
router.get("/login", (req,res) => {
    res.send({message: "login endpoint"});
});
router.get("/logout", (req,res) => {
    res.send({message: "Signout endpoint"});
});










export default router;// Exports the router object so it can be used in other parts of the application.
