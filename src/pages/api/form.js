// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Form from "../../../models/Form"
import connectDb from "../../../middleware/middleware"

const handler= async(req,res)=>{
  if(req.method == "POST"){
   new Form({img_path:req.body.img_path}).save();
    res.status(200).json("recived",req)
  }
  else{
    res.status(200).json("only post applied")
  }
  
}
 


export default  connectDb(handler)
