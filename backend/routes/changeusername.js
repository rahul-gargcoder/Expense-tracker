const express=require('express');
const { usermodel } = require('../models/connection');
const changename=express.Router();

changename
.route('/')
.post(changeusername);

async function changeusername(req,res){
    try {
        const {userid,name}=req.body;
        await usermodel.findOneAndUpdate({userid},{name});
        res.status(200).json({
            info:'Updated Successfully🎉🎉🎉'
        })
    } catch (error) {
        res.status.json({
            info:error.message
        })
    }
}
module.exports=changename;