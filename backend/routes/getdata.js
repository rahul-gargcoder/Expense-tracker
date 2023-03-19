const express=require('express');
const { userhistory } = require('../models/connection');
const getdata=express.Router();

getdata
.route('/')
.post(getvalues);

async function getvalues(req,res){
    try {
        const {id}=req.body;
        const result=await userhistory.findOne({userid:id});
        if(!result){
            return res.status(200).json({
                data:'no records'
            })
        }
        res.status(200).json({
            data:result.history
        })
    } catch (error) {
        res.status(404).json({
            data:'error at server'
        })
    }
}
module.exports=getdata