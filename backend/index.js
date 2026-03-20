const express = require("express");
const connectDB = require("./config/db");
const Applicants = require("./models/user")
require('dotenv').config;

const app = express()
app.use(express.json())

connectDB();

app.post("/api/register", async (req, res) => {
   
})

app.get('/', (req, res) =>{
    res.send("You successfully created your first demo api");
})

app.listen(3000,() =>{
    console.log("Listening to 3000");
})