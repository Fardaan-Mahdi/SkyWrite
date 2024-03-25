const mongoose=require('mongoose');

const mongoURI="mongodb://localhost:27017/SkyWrite"

const connectToMongo=async()=>{
    try{
    mongoose.connect(mongoURI); 
    console.log("mongo connected");
    }catch(error){
        console.log(error);
        process.exit();
    }
}

module.exports=connectToMongo;