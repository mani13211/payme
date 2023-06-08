import React from 'react'
const Razorpay = require('razorpay');
import connectDb from '../../../middleware/middleware';

const handler= async(req,res)=>{
    var instance = new Razorpay({
        key_id: 'rzp_test_me0oaPprh7ApQu',
        key_secret: 'tgmeW98PmFw8EhsWDKePDBH8',
      });
    var options = {
        amount: req.body.amount,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
      };
   
    instance.orders.create(options, function(err, order) {
      if(err){

        res.status(500).json("not created successfully ",err)
      }
      else{
          res.status(200).json({message:"order completed " ,data:order})
       
       
      //  console.log(order);
      }
        
      });
  }
   
  
  
  export default connectDb(handler)
  