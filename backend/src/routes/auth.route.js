import express from "express";
// Imports the Express library, which is used to create web servers in Node.js.

import { signup, login, logout } from "../controllers/auth.controller.js";    


const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);

export default router;// Exports the router object so it can be used in other parts of the application.