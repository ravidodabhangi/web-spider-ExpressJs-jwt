const { Schema, model } = require("mongoose");
const CourseSchema = new Schema(
  {
    course_name: {
      type: String,
      required: [true, "course name is required"],
    },
    course_id: {
      type: String,
      required: [true, "course id is required"],
    },
    course_language: {
      type: String,
      required: [true, "course language is required"],
    },
    course_trainer: {
      type: String,
      required: [true, "course trainer is required"],
    },
    course_duration: {
      type:String,
      required: [true, "course duration is required"],
    },
    student_details:{
      type:[""]
    },
    course_category: {
      type: String,
      required: [true, "course category is required"],
    },
    course_date: {
      type: String,
      required: [true, "course Date is required"],
      default: Date.now(),
    },
    course_image: {
      type: [""],
      required: [true, "course Image is required"],
      default:"https://onlinecde.annauniv.edu/theme/image.php/mb2nl/theme/1655749241/course-default",
    },
    course_video: {
      type: [""],
    },
    course_branch: {
      type: String,
      required: [true, "course branch is required"],
    },
    course_timings: {
      type: String,
      required: [true, "course timing is required"],
      default: Date.now(),
    },
    course_subjects: {
      type: String,
      required: [true, "course subjects is required"]
    },
    course_description: {
      type: String,
      required: [true, "course description is required"]
    },
  },
  { timestamps: true }
);
module.exports = model("courses", CourseSchema);