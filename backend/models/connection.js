const mongoose =require('mongoose');
const { userhistoryschema } = require('./userhistory');
const {userschema}=require('./userschema')

// mongodb://localhost:27017/expensetracker
mongoose.connect('mongodb://localhost:27017/expensetracker')
.then(function(db){
  console.log("db is connected");
})
.catch(function(err){
  console.log(err);
})

const usermodel=mongoose.model('usermodel',userschema);
const userhistory=mongoose.model('userhistory',userhistoryschema);
module.exports={usermodel,userhistory}
