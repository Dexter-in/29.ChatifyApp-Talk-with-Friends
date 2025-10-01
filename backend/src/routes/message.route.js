import express from "express";
import { getAllContacts } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMessagesByUserId  }  from "../controllers/message.controller.js";
import { sendMessage } from "../controllers/message.controller.js";
import { getChatPartners } from "../controllers/message.controller.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";



const router = express.Router();

router.use(arcjetProtection,protectRoute);   

 
router.get("/contacts",getAllContacts);
router.get("/chats",getChatPartners);
router.get("/:id",getMessagesByUserId);
router.post("/send/:id",sendMessage);

  




router.get("/send", (req,res ) =>{
    res.send("send messages endpoint");
});






export default router;


// Exports the router object so it can be used in other parts of the application.