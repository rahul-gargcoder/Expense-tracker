const mongoose =require('mongoose');
const userhistoryschema=mongoose.Schema({
    userid:{
        type:String
    },
    history:{
        type:[
            {
                date:String,
                list:[{
                    tname:{
                        type:String
                    },
                    amount:{
                        type:Number
                    },
                    flag:{
                        type:Boolean
                    }
                }]
            }
        ]
    }
})
module.exports={ userhistoryschema };