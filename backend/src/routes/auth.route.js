import express from "express";
// Imports the Express library, which is used to create web servers in Node.js.
import { signup, login, logout,updateProfile } from "../controllers/auth.controller.js";
import { protectRoute  } from "../middleware/auth.middleware.js";   
import { arcjetProtection } from "../middleware/arcjet.middleware.js";


const router = express.Router();

router.use(arcjetProtection);


router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);
router.post("/update-profile", protectRoute,updateProfile);

router. get("/check",protectRoute,(req,res) => res.status(200).json(req.user));




export default router;// Exports the router object so it can be used in other parts of the application.