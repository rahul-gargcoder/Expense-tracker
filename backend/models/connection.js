const mongoose =require('mongoose');
const { userhistoryschema } = require('./userhistory');
const {userschema}=require('./userschema')
mongoose.connect(`${process.env.MONGO_URL}`)
.then(function(db){
  console.log("db is connected");
})
.catch(function(err){
  console.log(err);
})

const usermodel=mongoose.model('usermodel',userschema);
module.exports={usermodel}
