const express=require('express');
const signup=express.Router();

signup
.route('/')
.post(signupfunc)

function signupfunc(req,res){
    console.log(req.body);
    res.json({
        flag:true
    });
}
module.exports=signup