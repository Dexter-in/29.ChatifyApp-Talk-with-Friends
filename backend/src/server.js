// const express = require("express");
// Imports the Express library, which is used to create web servers in Node.js.


import express from "express";
// Imports the Express library, which is used to create web servers in Node.js.
// import dotenv from "dotenv";
// Imports the dotenv library, which is used to load environment variables from a .env file into process.env.

import path from "path";
// Imports the path module, which provides utilities for working with file and directory paths.


// Loads environment variables from a .env file into process.env, allowing you to access them in your application.

import authRoutes from "./routes/auth.route.js";
// Imports the authentication routes from the auth.route.js file.
import messageRoutes from "./routes/message.route.js";

import { connectDB } from "./lib/db.js";


import { ENV } from "./lib/env.js";
// Imports the message routes from the message.route.js file.




const app = express();
const __dirname = path.resolve();

const PORT = ENV.PORT || 3000;

app.use(express.json());//req.body is used to get data from username and password 

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);

//make ready for deployment

if(ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*",(_,res) =>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
    });
}

app.listen (PORT, () => {
    console.log("server running on port:" + PORT)
    connectDB()
});