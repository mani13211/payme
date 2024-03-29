import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
export default  function Home() {
  const [image, setimage] = useState("")
  const [out,setout]=useState("")

  const handleChange= async(e)=>{
    console.log(e.target)
      setimage(e.target.value)
  
    const file=e.target.files[0];
    let reader = new FileReader();
   await reader.readAsDataURL(file);
  
    reader.onload = ()=> {
     // console.log(reader.result)
      var dataURL = reader.result;
     setout(dataURL)
      
  
    }
    reader.onerror=error=>{
      console.log("error is:",error)
    }
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
  
     
     // console.log(reader.readAsDataURL(image))
  
      const data={img_path:out}
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/form`, {
        method: "POST", // or 'PUT'
        
        api: {
          bodyParser: {
              sizeLimit: '4mb' // Set desired value here
          }
      },
        headers: {
          "Content-Type": "application/json",
        },
       
          bodyParser: {
              sizeLimit: '4mb' // Set desired value here
          }
      ,
        body: JSON.stringify(data),
      });
      alert("we recived image")
    setimage("")
    setout("")
   
  
    }
  
  return (
    <>
      <Head>
        <title>Imager</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    <script src="https://fb.me/react-15.1.0.js"></script>
    <script src="https://fb.me/react-dom-15.1.0.js"></script>
      </Head>
      <div className='container mx-auto bg-slate-200 p-3 text-center'>
        <h2 className='font-bold text-xl border-b-2 py-3'> We are here to see upload functionality</h2>
        <form onSubmit={handleSubmit}>
        <input   name="img_path" 
        onChange={handleChange}
        value={image}
         type="file"
         accept="image/png, image/gif, image/jpeg" />
          <img src={out} />
          <button className="inline-flex text-white text-sm bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Submit</button>
        </form>

      </div>
    </>
  )
}
