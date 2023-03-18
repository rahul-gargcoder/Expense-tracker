const express=require('express');
const signup=express.Router();
const {usermodel}=require('../models/connection')
signup
.route('/')
.post(signupfunc)

async function signupfunc(req,res){
    try {
    const {email,name,password}=req.body;
    const result=await usermodel.findOne({email});
    if(result){
        res.status(200).json({
            flag:false
        })
    }
    else{
        await usermodel.create({
            name,email,password
        })
        res.status(200).json({
            flag:true
        })
    }
    } catch (error) {
        res.status(404).json({
            flag:'server error'
        })
    }
    
}
module.exports=signup