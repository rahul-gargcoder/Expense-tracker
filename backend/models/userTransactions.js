const mongoose=require('mongoose')

const transactionSchema=new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'usermodel'
    },
    amount:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    type:{
        type:Boolean,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    isAdded:{
        type:Boolean,
        default:true
    }
})

module.exports=mongoose.model('Transaction',transactionSchema)