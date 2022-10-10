const mongoose=require('mongoose');



var tempproductShema=mongoose.Schema({
 
    name:{
        type:String,
        trim:true,
        required:true
    },
    price:{
        type:Number,
        trim:true,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    images:{
        type:String,
       
    },
    
    type:{
        type:String,
        required:true
    },
    address:{
        type:String,
       
    },
    userid:{
     type:String
    },
    phoneno:{
        type:Number
    }
});

var TempproductModel=mongoose.model('Tempproduct',tempproductShema);

module.exports=TempproductModel;