import express from "express";
// Imports the Express library, which is used to create web servers in Node.js.

import { signup } from "../controllers/auth.controller.js";    


const router = express.Router();

router.post("/signup",signup);
// This code sets up a route handler in your Express app.
router.post("/login", (req,res) => {
    res.send({message: "login endpoint"});
});
router.post("/logout", (req,res) => {
    res.send({message: "Signout endpoint"});
});










export default router;// Exports the router object so it can be used in other parts of the application.
