const {Schema,model}=require("mongoose");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const {JWT_EXPIRE,JWT_SECRET}=require("../config/index");


let AuthSchema=new Schema(
    {
        username:{
            type:String,
            required:[true,"username is required"]
        },
        email:{
            type:String,
            match:[
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "valid email is required"],
            unique:true,
        },
        password:{
            type:String,
            required:[true,"password is required"],
            minlength:[6,"password minimum 6 characters"],
            select:false
        },
        role:{
            type:String,
            enum:["user","publisher","admin"],
            default:"user",
        }
    },
    {timestamps:true}
);
AuthSchema.pre("save",async function(){
    let salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
});

AuthSchema.methods.getTOKEN=function(){
    return jwt.sign({id:this._id},JWT_SECRET,{expiresIn:JWT_EXPIRE});  //VISIT jwt github express search
};
AuthSchema.methods.matchPASSWORD=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

module.exports=model("auth",AuthSchema);



