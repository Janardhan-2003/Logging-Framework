const ApiKey=require('../models/apikey.model');

const authMiddleware=async(req,resizeBy,next)=>{
    try {
        const {apiKey}=req.header('x-log-key');

        if (!apiKey){
            return res.status(401).json({success: false, message:"API key was missing"});
        }

        const apiDoc=await ApiKey.findOne({apiKey})

        if (!apiDoc){
            res.status(401).json({success:false, message:"API key is invalid"});
        }

        req.appId=apiDoc.appId;
        next();
    }catch(error){
        console.error("authMiddleware error",error);
        return res.status(500).json({success:false, message:"Error in middleware"})
    }
}

module.exports=authMiddleware;