
import userModel from "../models/user.model.js";
import responseHandler from "../handlers/response.handler.js";
import subModel from "../models/subModel.js";


const Subcribe = async (req, res) =>{

    try {
      console.log("alien")
      const id = req.user.id;
      const user = await userModel.findById(id);
      const sub = await subModel.findOne({id}) ;
      if (!sub) return responseHandler.unauthorize(res);

      user.subscription = "premium"  
      sub.subscription = "premium"
  
      await sub.save();
      await user.save();
  
      responseHandler.ok(res);
    } catch {
      responseHandler.error(res);
    }
  
  }
  
  const UnSubcribe = async (req, res) =>{
  
    try {
        const id = req.user.id;
        const user = await userModel.findById(id);
      const sub = await subModel.findOne({id});
  
  
      if (!sub) return responseHandler.unauthorize(res);
      user.subscription = "free"
      sub.subscription = "free"
  
      await sub.save();
      await user.save();
  
      responseHandler.ok(res);
    } catch {
      responseHandler.error(res);
    }
  
  }


  const Pay = async (req , res) => {

    try {
        const id = req.user.id;
        const sub = await subModel.findOne({id}) ;      
        if (!sub) return responseHandler.unauthorize(res);    
        sub.payment = "true"    
       
    

        console.log("alien")
       
        const user = await userModel.findById(id);
        
        if (!sub) return responseHandler.unauthorize(res);
  
        user.subscription = "premium"  
        sub.subscription = "premium"
    
        await sub.save();
        await user.save();
    
        responseHandler.ok(res);





      } catch {
        responseHandler.error(res);
      }
    
  }



  export default {
    
    Subcribe,
    UnSubcribe,
    Pay
  };