import React from 'react'
import CryptoJS from 'crypto-js';
import sha256 from 'crypto-js/sha256';
const Razorpay = require('razorpay');
import connectDb from '../../../middleware/middleware';
import { validatePaymentVerification,validateweb } from 'razorpay/dist/utils/razorpay-utils';

const handler= async(req,res)=>{
    var instance = new Razorpay({
        key_id: 'rzp_test_me0oaPprh7ApQu',
        key_secret: 'tgmeW98PmFw8EhsWDKePDBH8',
      });
   
   
  
    let body=req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;
    var crypto = require("crypto");
    var expectedSignature = crypto.createHmac('sha256', 'tgmeW98PmFw8EhsWDKePDBH8')
                                    .update(body.toString())
                                    .digest('hex');
                                    // console.log("sig received " ,req.body.razorpay_signature);
                                    // console.log("sig generated " ,expectedSignature);
   //var response = {"signatureIsValid":"false"}
    
    var response = {"signatureIsValid":"false"}
  if(expectedSignature === req.body.razorpay_signature){
    response={"signatureIsValid":"true"}
   
     

  }
    
console.log(response)      
res.status(200).json({response:response,message:"34"})
  


    //validatePaymentVerification({"order_id": razorpayOrderId, "payment_id": razorpayPaymentId }, signature, secret);
    }
   
  
  
  export default connectDb(handler)
  