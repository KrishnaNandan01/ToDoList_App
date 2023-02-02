const express = require("express");
const loginRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const registerModel = require("../models/registerModel");

loginRouter.post("/register",async(req,res)=>{
    try{
        const isExist = await registerModel.findOne({user_name:req.body.user_name});
        if(!isExist){
            try{
                bcrypt.hash(req.body.password,10,async(err,hash)=>{
                    if(!err){
                        try{
                            const user = await registerModel.create({
                                user_name :req.body.user_name,
                                password :hash
                            });
                            res.status(200).json({
                                status:"register succefully",
                                user
                            })
                        }catch(e){
                            res.status(400).json({
                                status:"failed",
                                message:e.message
                            })  
                        }
                       
                    }
                })
               
            }catch(e){
                res.status(400).json({
                    status:"failed",
                    message:e.message
                })
            }
        }else{
            res.status(400).json({
                status:"failed",
                message:"user allredy exists"
            })
        }
    }catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        })
    }
    
});


loginRouter.post("/login", async (req, res) => {
  try {
    const isExist = await registerModel.findOne({
      user_name: req.body.user_name,
    });
    if (isExist) {
      try {
        const isPassword = await bcrypt.compare(req.body.password,isExist.password);
        if(isPassword){
            const token = jwt.sign({
                exp:Math.floor(Date.now()/1000)+(60*60),
                data:isExist._id
            },"secret")
            res.status(200).json({
                status:"success",
                message:"login successfully",
                token
            })
        }else{
            res.status(400).json({
                status: "failed",
                message: "password is wrong",
              });
        }
       
      } catch (e) {}
    } else {
      res.status(400).json({
        status: "failed",
        message: "user does not exists",
      });
    }
  } catch {
    res.status(400).json({
      status: "failed",
      message: e.message,
    });
  }
});

module.exports = loginRouter;
