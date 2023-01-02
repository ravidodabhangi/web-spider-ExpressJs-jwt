const {Schema,model}=require("mongoose");

const StudentSchema=new Schema(
    {
        student_name:{
            type:String,
            required:[true,"student_name is required"]
        },
        student_number:{
            type:String,
            required:[true,"student_number is required"]
        },
        student_email:{
            type:String,
            required:[true,"student_email is required"],
            unique:true
        },
        student_edu:{
            type:String,
            required:[true,"student_edu is required"]
        },
        prefered_courses:{
            type:String,
            enum:["JavaScript","Java","Python"]
        },
        prefered_branch:{
            type:String,
            enum:["Rajajinagar","BTM layout"]
        }
    },
    {timestamps:true}
)
module.exports=model("studentData",StudentSchema);
