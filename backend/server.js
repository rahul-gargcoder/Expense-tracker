const express=require('express');
const app=express();
const cors=require('cors');
const loginroute=require('./routes/login');
const signup=require('./routes/signup')
require('./models/connection')
app.use(express.json());
app.use(cors({
    origin:'http://localhost:3000',
    // origin:'http://localhost:3001',
    // credentials:true, 
}))
app.use('/login',loginroute)
app.use('/signup',signup)
app.listen(5000,()=>{
    console.log('🎉🎉🎉 listening on 5000');
})