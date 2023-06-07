import mongoose from "mongoose";
import modelOptions from "./model.options.js";


const SubSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
    unique: true
  },
  subscription: {
    type: String,
    default: "free",    
  },
  amount: {
    type: String,
    
  },
  payment: {
    type: Boolean,
    
    default: "false",
    
  },
  payment_type: {
    type: String,
    default: "easypaisa"   
  }
  
}, modelOptions);





const subModel = mongoose.model("subscription", SubSchema);

export default subModel;

