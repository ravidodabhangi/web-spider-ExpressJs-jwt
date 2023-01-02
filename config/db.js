const {connect}=require("mongoose");
const {success,error,info}=require("consola")
const{MONGODB_LOCAL,NODE_ENV,MONGODB_CLOUD,PORT}=require("./index")
let connectDb=async()=>{
    try{
        if(NODE_ENV==="development"){
            await connect(MONGODB_LOCAL);
            success("Local Database Connected successfully...");
        }else{
            await connect(MONGODB_CLOUD);
            success("Cloud Database Connected successfully...");
        }
    }catch(err){
        error(err);
    }
}
module.exports=connectDb;