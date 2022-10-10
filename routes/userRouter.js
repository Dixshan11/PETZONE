const router=require('express').Router();
const userCtrl=require('../controllers/usercontroller');
const auth = require('../middleware/auth');



router.post('/register',userCtrl.register);

router.post('/login',userCtrl.login);

router.get('/logout',userCtrl.logout);

router.get('/refresh_token',userCtrl.refeshToken);

router.get('/infor',auth,userCtrl.getUser);

router.post('/email',userCtrl.email);



//  // user can view their own products?? already write in productConrol
router.get('/userownproducts',auth,userCtrl.userownproducts);

router.route('/wishlist')
        .put(auth,userCtrl.addwishlist)
        .get(auth,userCtrl.getwishlist)



router.get('/buy',auth,(req,res)=>{
res.send("card details")
});







module.exports=router;