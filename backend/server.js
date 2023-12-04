const express=require('express');
const app=express();
require('dotenv').config('./')
const cors=require('cors');
const loginroute=require('./routes/login');
const signup=require('./routes/signup')
const addtransaction=require('./routes/addtransaction');
const gethistory = require('./routes/gethistory');
const changename = require('./routes/changeusername');
const changepassword = require('./routes/changepassword');
const getname = require('./routes/getusername');
const {getdata} = require('./routes/getdata');
const {gettransactions}=require('./routes/getdata');
const deleteTransaction = require('./routes/deleteTransaction');
require('./models/connection')
app.use(express.json());
app.use(cors({
    origin:'*'
}))
console.log(process.env);
app.use('/login',loginroute)
app.use('/signup',signup)
app.use('/addtransaction',addtransaction)
app.use('/gethistory',gethistory)
app.use('/changename',changename)
app.use('/changepassword',changepassword)
app.use('/getname',getname) 
app.use('/getdata',getdata)
app.post('/transactions',gettransactions);
app.use('/deletetransaction',deleteTransaction)
const PORT=process.env.PORT||5000
app.listen(PORT,()=>{
    console.log('🎉🎉🎉 listening on '+PORT);
})