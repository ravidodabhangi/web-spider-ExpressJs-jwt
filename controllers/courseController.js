const courseSchema = require("../models/courseModel");
const ErrorResponse = require("../utils/ErrorResponse");
/*---------
@Access private
@http verbs POST
@URL /api/course/create-course
*/

// exports.createCourseController=async (req,res,next)=>{
//     try{
//         // res.send1212("ok");
//         let image=req.files[0];
//         let video=req.files[1];
//         let body=req.body;
//         console.log(req.body);
//         let data={body,image,video};
//         let payload=await new courseSchema(data).save();
//          res.status(201).json({success:true,message:"successfully course created",payload});
//     }catch(err){
//         next(new ErrorResponse("INTERNAL SERVER ERROR",500));  //this belong to ErrorRespnse.js
//         // next(err)    //this belong to Errorhandler.js
//     }
// };

exports.createCourseController = async (req, res, next) => {
  try {
    let {
      course_name,
      course_id,
      course_language,
      course_trainer,
      course_duration,
      course_category,
      course_date,
      course_branch,
      course_timings,
      course_subjects,
      course_description,
    } = req.body;
    let course_image = req.files[0];
    let course_video = req.files[1];
    let payload = {
      course_name,
      course_id,
      course_language,
      course_trainer,
      course_duration,
      course_category,
      course_date,
      course_branch,
      course_timings,
      course_subjects,
      course_description,
      course_image,
      course_video,
    };
    let data = await new courseSchema(payload).save();
    res
      .status(201)
      .json({ success: true, message: "successfully course created", data });
  } catch (err) {
    next(new ErrorResponse("INTERNAL SERVER ERROR", 500));
  }
};

exports.courseAllFetch = async (req, res, next) => {
  try {
    let payload = await courseSchema.find({});
    res.status(201).json({
      success: true,
      message: "successfully courses are fetched",
      payload,
    });
  } catch (err) {
    next(new ErrorResponse("INTERNAL SERVER ERROR", 500));
  }
};

exports.courseSingleFetch = async (req, res, next) => {
  try {
    let payload = await courseSchema.find({ _id: req.params.id });
    res.status(201).json({
      success: true,
      message: "successfully course is fetched",
      payload,
    });
  } catch (err) {
    next(new ErrorResponse("INTERNAL SERVER ERROR", 500));
  }
};

exports.courseDelete = async (req, res, next) => {
  try {
    let payload = await courseSchema.deleteOne({ _id: req.params.id });
    res.status(201).json({
      success: true,
      message: "successfully course is deleted",
      payload,
    });
  } catch (err) {
    next(new ErrorResponse("INTERNAL SERVER ERROR", 500));
  }
};

exports.courseUpdate = async (req, res, next) => {
  try {
    let {
      course_name,
      course_id,
      course_language,
      course_trainer,
      course_duration,
      course_category,
      course_date,
      course_branch,
      course_timings,
      course_subjects,
      course_description,
    } = req.body;
    let course_image = req.files[0];
    let course_video = req.files[1];
    let payload = {
      course_name,
      course_id,
      course_language,
      course_trainer,
      course_duration,
      course_category,
      course_date,
      course_branch,
      course_timings,
      course_subjects,
      course_description,
      course_image,
      course_video,
    };
    let data = await courseSchema.updateOne(
      { _id: req.params.id },
      { $set: payload }
    );
    res
      .status(201)
      .json({ success: true, message: "successfully course is updated", data });
  } catch (err) {
    next(new ErrorResponse("INTERNAL SERVER ERROR", 500));
  }
};
