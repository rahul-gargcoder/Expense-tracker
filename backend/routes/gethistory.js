const express=require('express');
const gethistory=express.Router();
const { userhistory }=require('../models/connection')
gethistory
.route('/')
.post(getdetails)


async function getdetails(req,res){
    try {
        const {userid,date}=req.body;
        const result=await userhistory.findOne({userid});
        if(!result){
            return res.json({
                data:'no records'
            })
        }
        if(result.history.length===0){
            return res.json({
                data:'no records'
            })
        }
        for(let i=0;i<result.history.length;i++){
            let finddate=result.history[i].date;
            if(finddate==date){
                return res.status(200).json({
                    data:result.history[i].list
                })
            }
        }
        return res.json({
            data:'no records'
        })  
    } catch (error) {
        console.log(error.message)
        return res.status(404).json({
            data:'error at server'
        })
    }
       
}

module.exports=gethistory;