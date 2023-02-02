const express = require("express");
const activityRouter = express.Router();
const activityModel = require('../models/activityModel');

activityRouter.post("/activities",async(req,res)=>{
    try{
        const activity = await  activityModel.create({
            activity:req.body.activity,
            time_taken:req.body.time_taken,
            user:req.user
        })
        res.status(200).json({
            status:"success",
            activity
        })
    }
    catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        })
    }
});

activityRouter.get("/activities",async(req,res)=>{
    try{
        const activity = await  activityModel.find({user:req.user})
        res.status(200).json({
            status:"success",
            activity
        })
    }
    catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        })
    }
})


module.exports = activityRouter;