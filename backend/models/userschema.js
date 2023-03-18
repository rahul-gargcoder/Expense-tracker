const mongoose=require('mongoose');
const bcrypt=require('bcrypt')
const userschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
})

userschema.pre('save',async function(){
    let salt=await bcrypt.genSalt(10);
    let hash=await bcrypt.hash(this.password,salt);
    this.password=hash;
})

module.exports={userschema}