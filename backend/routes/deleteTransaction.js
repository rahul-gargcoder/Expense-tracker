const express=require('express');
const Transaction=require('../models/userTransactions')
const router=express.Router();

router
.route('/')
.post(deleteTransaction)


async function deleteTransaction(req,res){
    try {
        const {userid,tid}=req.body;
        if(!userid||!tid) return res.status(404).json({
            message:"All fields required"
        })
        const response=await Transaction.findByIdAndDelete(tid);
        return res.status(200).json({
            message:"This Transactions has been deleted successfully"
        })
    } catch (error) {
        return res.status(404).json({
            message:error.message
        })
    }
}
module.exports=router