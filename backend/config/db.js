const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const dbConnection=async ()=>{
    
        try{
           const conn=await mongoose.connect(process.env.MONGO_URI);
           console.log("Successfully connected to DB....!!");
        }catch(e){
            console.error("Failed to connect to DB",e.message);
            process.exit(1)
        }
   
};

module.exports=dbConnection