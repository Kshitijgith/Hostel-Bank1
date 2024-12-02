const mongoose=require('mongoose');
const env=require('dotenv');
env.config();
const connectDB=async()=>{
    try{
        console.log(process.env.MONGO_URL)
        await mongoose.connect(process.env.MONGO_URL,
            
        );
        console.log('MongoDB connection SUCCESS');
    }catch(error){
        console.error(error);
    }
}

module.exports=connectDB;
