const mongoose=require('mongoose')

const amountSchema=new mongoose.Schema({
    totalamount:{
        type:Number,
        default:0
    },
    creditamount:{
        type:Number,
        default:0
    },
    debitamount:{
        type:Number,
        default:0
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'usermodel'
    }
})

module.exports=mongoose.model('Amount',amountSchema);