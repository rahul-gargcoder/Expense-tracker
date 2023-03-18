const express=require('express');
const { userhistory } = require('../models/connection');
const addtransaction=express.Router();

addtransaction
.route('/')
.post(addingtransaction)


async function addingtransaction(req,res){
    try {
        const {amount,detail,date,flag,userdata}=req.body;
        var result=await userhistory.findOne({userid:userdata});
        if(!result){
            result=await userhistory.create({userid:userdata});
        }
        if(result.history.length===0){
            result.history.push({date:date,list:[{tname:detail,amount,flag}]});
            await userhistory.findOneAndUpdate({userid:userdata},{history:result.history})
            return res.status(200).json({
                flag:true
            })       
        }
        for(let i=0;i<result.history.length;i++){
            var datefromdb=result.history[i].date;
            if(datefromdb===date){
                result.history[i].list.push({tname:detail,amount,flag});
                await userhistory.findOneAndUpdate({userid:userdata},{history:result.history})
                return res.status(200).json({
                    flag:true
                }) 
            }
            else{
            result.history.push({date:date,list:[{tname:detail,amount,flag}]});
            await userhistory.findOneAndUpdate({userid:userdata},{history:result.history})
            return res.status(200).json({
                flag:true
            }) 
            }
        } 
    } catch (error) {
        res.status(404).json({
            flag:'server is not working'
        })
    }
         
}
module.exports=addtransaction;