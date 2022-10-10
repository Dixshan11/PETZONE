const express=require("express");
var router=express.Router();
const ProductModel=require('../models/product.model');
const TempproductModel=require('../models/tempproduct.model');
const auth = require('../middleware/auth');

const productController=require('../controllers/productController')
// .............................admin product access...................................

router.route('/tempproducts')
    .get(productController.admingetallProducts)// admin get all temp product
    .post(auth,productController.useraddpost)//create post by user
    
    .delete(productController.admindeleteproduct)// using query // admin delete products in temp collection
    .put(productController.adminedit)// admin  edit product in tempcolletion






    

    router.route('/adminfindoneproduct')
        .get(productController.adminfindone)// admin find one(last product)product for next button






// .....................user products..............................................



router.route('/products')
        .get(productController.usergetallposts)// all adds filter
        .post(productController.adminaddproduct)//using query // admin add post in permance coolection and delete in temp collection


        router.get('./product',productController.oneproduct)

router.get('/filtertype',productController.filtertype)
        


router.get('/productpreview', productController.postpreview)// popup product single preview


       
router.route('/postunderreview')
        .get(auth,productController.user_get_postunderreview)// user find therir own posted in temp products 
        .delete(auth,productController.user_delete_postunderreview)//  user delete their products which are not review yet



router.route('/postreviewed')
        .get(auth,productController.user_get_postreviewed)// user find therir own posted  products // reviewd products  
        .delete(auth,productController.user_delete_postreviewed)//  user delete their products which are not review yet




module.exports=router
