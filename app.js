require('dotenv').config()
var createError = require('http-errors');
const mongoose = require('mongoose')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fileUpload = require('express-fileupload')
const cors = require('cors')
const nodemailer=require('nodemailer')

var usersRouter = require('./routes/userRouter');
var productsRouter1=require('./routes/productRouter')



const URI=process.env.MONGODB_URI;
mongoose.connect(URI,err=>{
    if(err) throw err;
    console.log('connected to the mongoodb');
});


var app = express();
app.use(express.static(__dirname));














app.get('/admin',function(req,res,next){

  res.sendFile(__dirname+'/views/admin.html');
});

app.get('/useradds',function(req,res,next){

  res.sendFile(__dirname+'/views/user_add_posts.html');
});

app.get('/signin',function(req,res,next){

  res.sendFile(__dirname+'/views/signin.html');
});
app.get('/login',function(req,res,next){

  res.sendFile(__dirname+'/views/login.html');
});


app.get('/product',function(req,res,next){

  res.sendFile(__dirname+'/views/products.html');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', usersRouter);

app.use('/api',require('./routes/upload'))
app.use('/api', productsRouter1);
//  require('./routes/emai.js')(app);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
