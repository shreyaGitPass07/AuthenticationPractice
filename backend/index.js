const express = require("express");
const connectDB = require("./config/db");
const Applicants = require("./models/user");
const { signinSchema, signupSchema } = require("./validators/authValidator");


const app = express()
app.use(express.json())
connectDB();

app.get('/', (req, res) =>{
    res.send("You successfully created your first demo api");
})

app.post("/api/register", async (req, res) => {
   const body = req.body;

   try{

        const result = signupSchema.safeParse(body);
        if (!result.success){
            return res.json({
                message : "Validation is failed",
                error : result.error.errors
            })
        }
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

app.post('/api/login', async(req, res) => {
    const body = req.body;

    try{

        const result = signinSchema.safeParse(body);

        if (!result.success){
            return res.status(400).json({
                message: "Validation failed",
                errors: result.error.errors
              });
        }

        const applicant = await Applicants.findOne({
            username : body.username
        })

        if (!applicant){
            res.send("No applicant found");
        }

        if (applicant.password !== body.password){
            res.send("Incorrect password")
        }

        res.json({
            msg : "Login successfull"
        })
    } catch(error){
        res.json({
            error : error.message
        })
    }
})



app.listen(3000,() =>{
    console.log("Listening to 3000");
})