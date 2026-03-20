const express = require("express");
const connectDB = require("./config/db");
const Applicants = require("./models/user")


const app = express()
app.use(express.json())

connectDB();

app.post("/api/register", async (req, res) => {
   const body = req.body;

   try{
        const newApplicant = new Applicants({
            name : body.name,
            username : body.username,
            password : body.password,
            college : body.college
        })
        await newApplicant.save();

        res.json({
            msg : "Applicant added successfully",
            data : newApplicant
        })

   }catch(error){

        res.json({
            error : error.message
        })

   }
})

app.get('/', (req, res) =>{
    res.send("You successfully created your first demo api");
})

app.listen(3000,() =>{
    console.log("Listening to 3000");
})