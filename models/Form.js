import mongoose from 'mongoose';
const FormSchema = new mongoose.Schema({
   
    img_path:String,
},{timestamps:true}
);
export default mongoose.models.Form || mongoose.model("Form",FormSchema)

