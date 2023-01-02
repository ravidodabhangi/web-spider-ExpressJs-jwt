// // go to google search errorhandling..........in express.com
// let errorHandler=function(err,req,res,next){
//     let error=new Error();
//     // let statusCode=err.statusCode;
//     // let message=err.message;
//     console.error(error.stack);
//     res.status(500).send("something broke!")
// };
// module.exports=errorHandler; 


let Errorhandler=(err,req,res,next)=>{
    res.status(err.statusCode || 500).json({success:false,error:err.message || "server error"});
};
module.exports=Errorhandler;