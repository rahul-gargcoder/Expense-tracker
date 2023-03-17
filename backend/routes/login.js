const express=require('express');
const login =express.Router();

login
.route('/')
.post(logincheck)

function logincheck(req,res){
    console.log(req.body);
    res.json({
        flag:true
    })
}
module.exports=login;