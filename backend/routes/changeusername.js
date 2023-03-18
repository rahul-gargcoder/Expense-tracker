const express=require('express');
const { usermodel } = require('../models/connection');
const changename=express.Router();

changename
.route('/')
.post(changeusername);

async function changeusername(req,res){
    try {
        const {userid,name}=req.body;
        await usermodel.findOneAndUpdate({_id:userid},{name});
        res.status(200).json({
            info:'Updated Successfully🎉🎉🎉'
        })
    } catch (error) {
        res.status(404).json({
            info:error.message
        })
    }
}
module.exports=changename;