const Users = require('../models/user.model');
const ProductModel = require('../models/product.model');
const TempproductModel = require('../models/tempproduct.model');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const nodemailer=require('nodemailer')


const userCtrl = {

    register: async (req, res) => {

        try {

            const {name,email,password}=req.body;
            const user=await Users.findOne({email});
      

            if(user) return res.status(400).json({msg:"the email already exist"});

            if(password.length < 6 )
            return res.status(400).json({msg:"password is at least 6 character"});

          
            const passwordHash=await bcrypt.hash(password,10);
            const newUser=new Users({
                name,email,password:passwordHash
            });

        // save in to mongodb
                await newUser.save();

            // then create a jsonwebtoken to authontication
            const accesstoken=createAccessToken({id:newUser._id});
            const refreshtoken=createRefreshToken({id:newUser._id});
            
            res.cookie('refreshtoken',refreshtoken,{
                httpOnly:true,
                path : '/user/refresh_token'
            })

                res.json({accesstoken});

                // res.json({msg:"register successfull"});

        } catch (err) {
            return res.status(500).json({msg:err.message})
        }

    },
    
    login: async(req,res)=>{
        try {
            const {email,password}=req.body;
                    //find user by email
            const user=await  Users.findOne({email});
            if(!user) return res.status(400).json({msg:"user does not exist"})// if user alrady not exist 

            const isMatch=await bcrypt.compare(password,user.password);// if user already exist

            if(!isMatch) return res.status(400).json({msg:"wrong password"})// if password wrong 

            // if login success , create acceesstoken and refresh taken
            const accesstoken=createAccessToken({id:user._id});
            const refreshtoken=createRefreshToken({id:user._id});
            
            res.cookie('refreshtoken',refreshtoken,{
                httpOnly:true,
                path: '/user/refresh_token'
            })

                res.json({accesstoken});

            // res.json({msg:"login success!"});



        } catch (err) {
            return res.status(500).json({msg:err.message})
        }
    },

    logout:async(req,res)=>{
        try {
            res.clearCookie('refreshtoken',{path: '/user/refresh_token'})
            return res.json({msg:"loged out"})
            
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }
    },






    refeshToken:(req,res)=>{
            try {
                const rf_token=req.cookies.refreshtoken;
                if(!rf_token) return res.status(400).json({msg:"plesse login or register"});

                jwt.verify(rf_token,process.env.REFRESH_TOKEN_SECRET,(err,user)=>{
                    if(err) return res.status(400).json({msg:"plesse login or register"});

                    const accesstoken=createAccessToken({id:user.id});


                    res.json({user,accesstoken});

                });
     
            } catch (error) {
                return res.status(500).json({msg:err.message})
            }
     
    },







    getUser: async(req,res)=>{
        try {
            const user=await  Users.findById(req.user.id).select('-password')
            if(!user) return res.status(400).json({msg:"user does not exist"});

            res.json(user)

            
        } catch (err) {
            return res.status(500).json({msg:err.message});
        }
    },

    email: async(req,res)=>{
        const transporter = nodemailer.createTransport({
            service: "gmail",
            // port: 2525,
            auth: {
              user: "openopportunities123@gmail.com",
              pass: "meOOpp@97"
            }
          });
          const mailOptions ={
            from    : req.body.email,
            to      :"openopportunities123@gmail.com",
            subject : `Message from ${req.body.email}: ${req.body.subject}`,
            text    : req.body.message,
        };
        transporter.sendMail(mailOptions,(error, info)=>{
            if (error) {
                console.log("hh");
                res.send(error);
            }else{
                console.log('Email sent: '+ info.response);
                res.send('Email sent successfully!');
            }
        });
        
    },

    // user can view their own products

    userownproducts: async(req,res)=>{

        const userid=req.user.id;

        try {
            const product= await TempproductModel.find({userid:userid})
            res.send(product)
                
             
 
         } catch (err) {
             return res
                 .status(500)
                 .json({msg: err.message})
         }
    },



      // add products in wishlist
      addwishlist: async(req,res)=>{

        
        const userid=req.user.id;
        const productid=req.query.productid;

        try {

            const user=await  Users.findById(userid);
            const b=user.cart.length;
            console.log(productid)

            Users.findByIdAndUpdate(userid,{$addToSet:{cart:productid}},function(err,response){
                if(err)
                res.send(err);
                else
                res.send(response);
            });
                
             
 
         } catch (err) {
             return res
                 .status(500)
                 .json({msg: err.message})
         }
    },


//  get wishlist details 
    getwishlist: async(req,res)=>{
        const userid=req.user.id;
        try {

            const user=await  Users.findById(userid);
            const b=user.cart.length;
           
        //    const carddetails=user.cart
        //    res.send({carddetails,b})
                
             const cardid=user.cart;

            //  cardid.forEach(element => {
            //     res.send(element)
                 
            //  });

            for (let index = 0; index < b; index++) {
                const id = cardid[index];
                const Product=await  ProductModel.findById(id);
               
                console.log(Product)
                
            }
            res.end();
           
 
         } catch (err) {
             return res
                 .status(500)
                 .json({msg: err.message})
         }

    }







    
}







const createAccessToken=(user)=>{
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1d'})
}


const createRefreshToken=(user)=>{
    return jwt.sign(user,process.env.REFRESH_TOKEN_SECRET,{expiresIn:'7d'})
}
    module.exports = userCtrl;