const express=require('express');
const { usermodel } = require('../models/connection');
const getname=express.Router();

getname
.route('/')
.post(getusername)

async function getusername(req,res){
    try {
        let result=await usermodel.findById(req.body.data);
        if(result){
            res.status(200).json({
                name:result.name
            })
        }
    } catch (error) {
        res.status(404).json({
            name:error.message
        })
    }
}

module.exports=getname