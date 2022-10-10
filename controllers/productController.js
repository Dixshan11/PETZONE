
const ProductModel = require('../models/product.model');
const TempproductModel = require('../models/tempproduct.model');





const cloudinary=require('cloudinary')
const auth=require('../middleware/auth')
const authAdmin=require('../middleware/authAdmin')
const fs=require('fs')


const productController = {

    // ................................admin only...............................................

// FIND ALL ADDS IN TEMP COLLCTION
    admingetallProducts: async (req, res, next) => {
        try {
           const product= await TempproductModel.find()
           res.send(product)
               
            

        } catch (err) {
            return res
                .status(500)
                .json({msg: err.message})
        }
    },


 //SAVE IN TO PERMANCE COLLECTION AND DELETE IN TO TEM COLLECTION 
    adminaddproduct:  async(req, res) => {
         try{
            const id=req.query.id;
        
            const product=await  TempproductModel.findOne({id});

            console.log(req.body.name);
            let newProduct=await new ProductModel({
                userid:product.userid,
                name:product.name,
                type:product.type,
                price:product.price,
                description:product.description,
                images:product.images,
                address:product.address,
                phoneno:product.phoneno
              
                
            });
        
        
            await newProduct.save(function(err,newProduct){
                if(err)
                    res.send(err);
                else
                    TempproductModel.findByIdAndDelete(id,function(err,response){
                         if(err)
                            res.send(err);
                 else
                 res.send(response);
                });
            });
        }
        catch{
            return res.status(500).json({msg:err.message})
        }

            
    }, 

    oneproduct:async (req, res, next) => {
       
        try {
            const id=req.query.id;
            const product=await  TempproductModel.findOne({id});
            res.send(product)
                
             
 
         } catch (err) {
             return res
                 .status(500)
                 .json({msg: err.message})
         }
    }
,



        //DELETE TEMP COLLECTION DOCUMENTS
    admindeleteproduct: async (req, res, next) => {
        try{
        const id=req.query.id;
        TempproductModel.findByIdAndDelete(id,function(err,response){
            if(err)
                res.send(err);
            else
                res.send(response);
        });

    }
    catch{
        return res.status(500).json({msg:err.message})
    }

    },


        // UPDATE TEMP COLLECTION DOCUMENTS
    adminedit:(req, res, next) => {

        try{
        const id=req.query.id;
        const name=req.body.name;
        const type=req.body.type;
        const price=req.body.price;
        const address=req.body.address;
        const description=req.body.description;
        
       
        TempproductModel.findByIdAndUpdate(id,{name:name,type:type,price:price,address:address,description:description},function(err,response){
            if(err)
            res.send(err);
            else
            res.send(response);
        });
    }
    catch{
        return res.status(500).json({msg:err.message})
    }
    },



        // FIND ONE IN TEMP COLLECTION
    adminfindone: async (req, res, next) => {
        try{
        TempproductModel.findOne({},function(err,response){
            if(err)
            res.send(err);
            else
            res.send(response);
        });

    }
    catch{
        return res.status(500).json({msg:err.message})
    }
    },






    // ...................................................user products.................................................




// add posts in temp collection by user
    useraddpost:  (req, res, next) => {
        console.log('hi')

        // const userid=req.user.id;
        

        if(!req.files||Object.keys(req.files).length===0)
        return res.status(400).json({msg:'No File uploaded'})

    const file=req.files.photo;
    if(file.size>1024*1024) {
        removeTmp(file.tempFilePath)
        return res.status(400).json({msg:'Size too large'})
    }
    
    if(file.mimetype!=='image/jpeg' && file.mimetype!=='image/png'){
        removeTmp(file.tempFilePath)
        return res.status(400).json({msg:'File format is incorrect'})
    }
       
          
            cloudinary.v2.uploader.upload(file.tempFilePath,{folder:"test"},async(err,result)=>{
                if(err)throw err;
                removeTmp(file.tempFilePath)
                const imgid=result.public_id;
                const imgurl=result.secure_url;
                console.log(imgid);
                
                
         
    

                 let newProducts=new TempproductModel({
                    // userid:userid,
                    name:req.body.name,
                    type:req.body.type,
                    price:req.body.price,
                    description:req.body.description,
                    images:imgurl,
                    address:req.body.address,
                    phoneno:req.body.phoneno,
                    });
                
                   

                    newProducts.save(function(err,newProducts){
                        if(err)
                            res.send(err);
            
                        else
                            res.send({
                        status:200,
                        message:"success",
                        inserteddtaObj:newProducts
                    });
                });

            })
    },


    // user show all adds 

    usergetallposts:async (req, res, next) => {

        ProductModel.find({},function(err,response){
            if(err)
            res.send(err);
            else
            res.send(response);
        });

    },



    //filter products by type
    filtertype: async (req, res, next) => {

        const type = req.query.id;

        ProductModel.find({type: type}, (err, response) => {
            if (err) 
                throw err;
            res.send(response);

        });
    },

//posts preview (one add)
    postpreview: async (req, res, next) => {
        try {
            const id = req.query.id;
        console.log(id);

        ProductModel.findById(id, function (err, response) {
            if (err) 
                res.send(err);
            else 
                res.send(response);
            }
        );
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }

        
    },


//user show therir own temp products or un reviewed products 
    user_get_postunderreview:async (req, res, next) => {
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

// user delete therir temp products which are not reviewd by admin
    user_delete_postunderreview:async (req, res, next) => {
       
        try{
            const userid=req.user.id;
            const productid=req.query.productid;
            TempproductModel.deleteOne({$and:[{userid:userid},{_id:productid}]},function(err,response){
                if(err)
                    res.send(err);
                else
                    res.send(response);
            });
    
        }
        catch{
            return res.status(500).json({msg:err.message})
        }
    },


// user show therir own products which are reviewd by admin
    user_get_postreviewed:async (req, res, next) => {
        const userid=req.user.id;
        try {
            const product= await ProductModel.find({userid:userid})
            res.send(product)
                
             
 
         } catch (err) {
             return res
                 .status(500)
                 .json({msg: err.message})
         }
    },


// user delete therir reviewd newProducts
    user_delete_postreviewed:async (req, res, next) => {

        try{
            const userid=req.user.id;
            const productid=req.query.productid;
            ProductModel.deleteOne({$and:[{userid:userid},{_id:productid}]},function(err,response){
                if(err)
                    res.send(err);
                else
                    res.send(response);
            });
    
        }
        catch{
            return res.status(500).json({msg:err.message})
        }

    }




// ...........................filter by name.....................???


}

const removeTmp=(path)=>{
    fs.unlink(path,err=>{
        if(err)throw err;
        
    })
}
module.exports = productController