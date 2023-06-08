import Head from 'next/head';
import React from 'react'
import Script from 'next/script'
import { useEffect } from 'react'
const Razorpay = require('razorpay');
const shop = () => {
const openRazer=async(data)=>{
      var options = {
        "key_id": "rzp_test_me0oaPprh7ApQu",
        "amount": Number(data.amount),
        "currency": data.currency,
        "name": "Acme Corp",
        "description": "Test Transaction",
        "order_id": data.id,
        "handler": async function (response){
          try{
            let p =  await  fetch("http://localhost:3000/api/verifypay", {
             method: "POST", // or 'PUT'
             optionsSuccessStatus: 200,
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify(response)})
          // handleRazer(data);
           ;
           const result = await  p.json();
          console.log(result)
          //   console.log("Success:", result);
            
   
           }catch{
             console.log("error while verify")
   
           }
          
      },
      
    };
 // console.log(data,options)
  var rzp1 =   new window.Razorpay(options);
   await rzp1.open();
}
    
      const openCheckout=async()=> {
        const data={amount:"100"}
        try{
         let p =  await fetch("http://localhost:3000/api/pay", {
          method: "POST", // or 'PUT'
          optionsSuccessStatus: 200,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)})
       // handleRazer(data);
        ;
        const result = await p.json();
          //console.log("Success:", result);
          openRazer(result.data)

        }catch{
          console.log("error while opening checkout fetching")

        }
         
    
//https://www.youtube.com/watch?v=HWOMQQ1akg0&t=1113s


      }


  return (
     <>
     <Head>
     <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
     </Head>

         <button onClick={openCheckout} className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">PAY:1</button> 


      </>
  )
}

export default shop


