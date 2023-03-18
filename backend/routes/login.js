const express=require('express');
const login =express.Router();
const {usermodel}=require('../models/connection')
const bcrypt=require('bcrypt')
login
.route('/')
.post(logincheck)

async function logincheck(req,res){
    try{
    const {email,password}=req.body;
    const result=await usermodel.findOne({email});
    if(!result){
        return res.status(200).json({
            info:'User not exist❗❗❗',
            flag:false
        })
    }
    const check=await bcrypt.compare(password,result.password);
    if(check){
        return res.status(200).json({
            info:'You have been successfully logged in🎉🎉🎉',
            flag:true,
            detail:result._id
        })
    }
    else{
        return res.status(200).json({
            info:'Password not match❗❗❗',
            flag:false
        })
        
    }
    }
    catch(err){
        console.log(err.message);
        res.status(404).json({
            flag:err.message
        })
    }
    
}
module.exports=login;