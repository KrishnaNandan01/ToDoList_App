const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const loginRouter = require("./router/loginRoutes");
const activityRouter = require("./router/activityRoutes");
const jwt = require("jsonwebtoken");

dotenv.config();
const app = express();
const port = process.env.PORT || 28005
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.DATABASE_URL,(err)=>{
    if(!err){
        console.log("Database connected");
    }
});


// middleware for token veification

app.use("/activities",(req,res,next)=>{
    try{
        const token = req.headers.authorization
        if(token){
            const decode = jwt.verify(token,"secret");
            req.user = decode.data;
            next();
        }
        else{
            res.status(400).json({
                status:"failed",
                message:"token is missing"
            })
        }
        

    }catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        })
    }
})

app.use("/",loginRouter);
app.use("/",activityRouter);


app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})