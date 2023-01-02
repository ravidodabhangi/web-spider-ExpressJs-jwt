const {Schema,model}=require("mongoose");
let ProfileSchema=new Schema(
    {
    user:{
        type:Schema.Types.ObjectId,
        ref:"auth",
    },
    firstname:{
        type:String,
        required:[true,"FirstName is required"]
    },
    lastname:{
        type:String,
        required:[true,"lastname is required"]
    },
    phone:{
        type:Number,
        required:[true,"phone is required"]
    },
    address:{
        type:String,
        required:[true,"address is required"]
    },
    dob:{
        type:String,
        required:[true,"dob is required"]
    },
    city:{
        type:String,
        required:[true,"city is required"]
    },
    gender:{
        type:String,
        enum:["male","female","others"],
        required:[true,"gender is required"]
    },
    photo:{
        type:[""],
        default:"https://media.istockphoto.com/vectors/male-profile-flat-blue-simple-icon-with-long-shadow-vector-id522855255?k=20&m=522855255&s=612x612&w=0&h=fLLvwEbgOmSzk1_jQ0MgDATEVcVOh_kqEe0rqi7aM5A=",
    },
    Selected_courses:{
        type:[""]
    },
},
{timestamps:true}
)


module.exports=model("profile",ProfileSchema)






