const express=require('express');
const app=express();
const cors=require('cors');
const loginroute=require('./routes/login');
const signup=require('./routes/signup')
const addtransaction=require('./routes/addtransaction');
const gethistory = require('./routes/gethistory');
const changename = require('./routes/changeusername');
const changepassword = require('./routes/changepassword');
const getname = require('./routes/getusername');
const getdata = require('./routes/getdata');
require('./models/connection')
app.use(express.json());
app.use(cors({
    origin:'http://localhost:3000',
    // origin:'http://localhost:3001',
    // credentials:true, 
}))


app.use('/login',loginroute)
app.use('/signup',signup)
app.use('/addtransaction',addtransaction)
app.use('/gethistory',gethistory)
app.use('/changename',changename)
app.use('/changepassword',changepassword)
app.use('/getname',getname)
app.use('/getdata',getdata)
app.listen(5000,()=>{
    console.log('🎉🎉🎉 listening on 5000');
})