const jwt=require("jsonwebtoken");
const {JWT_SECRET}=require('../config');
const AuthSchema=require("../models/AuthModel");
const ErrorResponse=require("../utils/ErrorResponse");

const Protected=async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.split(" ")[0]==="Bearer"){
        token=req.headers.authorization.split(" ")[1];
        if(!token){
            next(new ErrorResponse("not authorized",403))  //check 403 error in google
        }
        try {
            //decode jwt secret
            let decoded=jwt.verify(token,JWT_SECRET);
            req.user=await AuthSchema.findById(decoded.id);
            next();
            
        } catch (error) {
            next(new ErrorResponse("not Authorized",403));
        }
    }
};

const authorizedUser=(...roles)=>{
    return(req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return next(
                new ErrorResponse(`user role ${req.user.role} is not authorized`,403)
            )
        }
        next();
    }
}
module.exports={Protected,authorizedUser};
