const mongoose=require('mongoose');
var userShema=mongoose.Schema({

   
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    role:{
        type:Number,
       default:0
       
    },
    cart:{
        type:Array,
        default:[]
    }

 
},{
    timestamps:true
   
 });

var userModel=mongoose.model('user',userShema);
module.exports=userModel;
    
    