const express=require('express');
const Transaction=require('../models/userTransactions')
const addtransaction=express.Router();

addtransaction
.route('/')
.post(addingtransaction)


async function addingtransaction(req,res){
    try {
        const {amount,detail,date,flag,userdata,addtoBalance}=req.body;
        
        
        await Transaction.create({
            amount:amount,
            userid:userdata,
            type:flag,
            description:detail,
            isAdded:addtoBalance,
            createdAt:date
        }) 
        return res.status(200).json({
            flag:true
        })
    } catch (error) {
        res.status(404).json({
            flag:'server is not working'
        })
    }
         
}
module.exports=addtransaction;