const express=require('express');
const { usermodel } = require('../models/connection');
const changepassword=express.Router();
const bcrypt=require('bcrypt')
changepassword
.route('/')
.post(changepasswords)

async function changepasswords(req,res){
    try {
    const {userid,password}=req.body;
    let salt=await bcrypt.genSalt(10);
    let hash=await bcrypt.hash(password,salt);
    await usermodel.findOneAndUpdate({_id:userid},{password:hash});
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