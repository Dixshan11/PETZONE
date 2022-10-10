const User=require('../models/user.model');

const authAdmin=async(req,res,next)=>{
try {
    // get userr information by id

    const user=await User.findOne({
        _id:req.user.id
    })

    if(user.role===0)
    return res.status(400).json({msg:"Admin recources acccess denied"})


    next()

    
} catch (err) {
    return res.status(500).json({msg:err.message})
}

}


module.exports=authAdmin;