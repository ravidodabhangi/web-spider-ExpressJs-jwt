// const { Schema, model } = require("mongoose");
// const CourseSchema = new Schema(
//   {
//     course_name: {
//       type: String,
//       required: [true, "course name is required"],
//     },
//     course_id: {
//       type: String,
//       required: [true, "course id is required"],
//     },
//     course_language: {
//       type: String,
//       required: [true, "course language is required"],
//     },
//     course_trainer: {
//       type: String,
//       required: [true, "course trainer is required"],
//     },
//     course_duration: {
//       type:String,
//       required: [true, "course duration is required"],
//     },
//     course_category: {
//       type: [String],
//       required: [true, "course category is required"],
//       enum: [
//         "web development",
//         "java development",
//         "fullstack development",
//         "ui development",
//         "python development",
//         "backend development",
//         "automation testing",
//       ],
//     },
//     course_date: {
//       type: String,
//       required: [true, "course Date is required"],
//       default: Date.now(),
//     },
//     course_image: {
//       type: [""],
//       // required: [true, "course Image is required"],
//       // default:
//       //   "https://onlinecde.annauniv.edu/theme/image.php/mb2nl/theme/1655749241/course-default",
//     },
//     course_video: {
//       type: [""],
//     },
//     course_branch: {
//       type: [String],
//       enum: [
//         "basavanagudi",
//         "rajajinagar",
//         "btm layout",
//         "hebbal",
//         "old airport",
//       ],
//       required: [true, "course branch is required"],
//     },
//     course_timings: {
//       type: String,
//       required: [true, "course timing is required"],
//       default: Date.now(),
//     },
//     course_subjects: {
//       type: [String],
//       enum: [
//         "JavaScript",
//         "Java",
//         "Python",
//         "NodeJs",
//         "ExpressJs",
//         "ReactJs",
//         "Angular",
//         "Web services",
//         "cypress",
//         "unit testing",
//         "NextJs",
//         "Api testing",
//         "Socket.io",
//         "Swagger",
//         "Postman",
//       ],
//       required: [true, "course subjects is required"]
//     },
//     course_description: {
//       type: String,
//       required: [true, "course description is required"]
//     },
//   },
//   { timestamps: true }
// );
// module.exports = model("courses", CourseSchema);