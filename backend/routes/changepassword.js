const express=require('express');
const { usermodel } = require('../models/connection');
const changepassword=express.Router();

changepassword
.route('/')
.post(changepasswords)

async function changepasswords(req,res){
    try {
    const {userid,password}=req.body;
    await usermodel.findOneAndUpdate({userid},{password});
    return res.json({
        info:'Password updated successfully🎉🎉🎉'
    })
    } catch (error) {
        res.status(404).json({
            info:error.message
        })
    }
    
}
module.exports=changepassword;