// const express = require("express");
// Imports the Express library, which is used to create web servers in Node.js.


import express from "express";
// Imports the Express library, which is used to create web servers in Node.js.
import dotenv from "dotenv";
// Imports the dotenv library, which is used to load environment variables from a .env file into process.env.

import path from "path";
// Imports the path module, which provides utilities for working with file and directory paths.

dotenv.config();
// Loads environment variables from a .env file into process.env, allowing you to access them in your application.

import authRoutes from "./routes/auth.route.js";
// Imports the authentication routes from the auth.route.js file.
import messageRoutes from "./routes/message.route.js";




const app = express();
const __dirname = path.resolve();

const PORT = process.env.PORT || 3000;

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);

//make ready for deployment

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*",(_,res) =>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
    });
}

app.listen (PORT, () => console.log("server running on port:" + PORT));