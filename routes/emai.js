const express = require('express');

const nodemailer = require('nodemailer');
module.exports = function(app) {

app.post('/email',(req,res)=>{
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        // port: 2525,
        auth: {
          user: "openopportunities123@gmail.com",
          pass: "meOOpp@97"
        }
      });
      const mailOptions ={
        from    : req.body.email,
        to      : "openopportunities123@gmail.com",
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
    
})

}
