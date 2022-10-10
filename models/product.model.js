const mongoose=require('mongoose');



var productShema=mongoose.Schema({

  


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
        type:String
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

var ProductModel=mongoose.model('Product',productShema);

module.exports=ProductModel;