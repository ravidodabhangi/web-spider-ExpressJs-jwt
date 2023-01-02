const StudentModel = require("../models/StudentModel");
const CourseSchema = require("../models/courseModel");
const ProfileSchema = require("../models/ProfileModel");
const ErrorResponse = require("../utils/ErrorResponse");

exports.studentDataController = async (req, res, next) => {
  try {
    let {
      student_name,
      student_number,
      student_email,
      student_edu,
      prefered_courses,
      prefered_branch,
    } = req.body;
    let payload = {
      student_name,
      student_number,
      student_email,
      student_edu,
      prefered_courses,
      prefered_branch,
    };
    let data = await new StudentModel(payload).save();
    let details = await CourseSchema.updateOne(
      { course_name: data.prefered_courses },
      { $push: { student_details: data } }
    );
    res.status(200).json({
      success: true,
      message: "Student Data is Stored Successfully",
      details,
    });
  } catch (error) {
    next(new ErrorResponse("INTERNAL studentDataController ERROR", 500));
  }
};

exports.studentDataDelete = async (req, res, next) => {
  try {
    let data = await StudentModel.deleteOne({ student_name: req.params.body });
    let payload = await CourseSchema.updateOne(
      { student_details: { $elemMatch: { student_name: req.params.body } } },
      { $pull: { student_details: { student_name: req.params.body } } }
    );
    res.status(200).json({
      success: true,
      message: "Student Data is deleted Successfully from Database",
      data,
      payload,
    });
  } catch (error) {
    next(new ErrorResponse("INTERNAL studentDataDelete ERROR", 500));
  }
};

exports.searchCourseController = async (req, res, next) => {
  try {
    // let course_data = await CourseSchema.findOne({
    //   $and: [
    //     { course_name: "JavaScript" },
    //     { course_trainer: "shashi sir" },
    //     { course_duration: "5" },
    //     { course_date: "1661183872276" },
    //     { course_branch: "Rajajinagar" },
    //     { course_timings: "1661183872276" },
    //     { course_subjects: "JavaScript" },
    //   ],
    // });
    let course_data = await CourseSchema.findOne({ _id: req.params.id });
    let { course_name, course_image, course_video } = course_data;
    let payload = { course_name, course_image, course_video };
    let ProfileData = await ProfileSchema.find({});
    let data = await ProfileSchema.updateOne(
      { firstname: ProfileData[0].firstname },
      { $push: { Selected_courses: payload } }
    );
    res.status(201).json({
      success: true,
      message: "Course is successfully Purchased",
      data,
    });
  } catch (error) {
    next(new ErrorResponse("INTERNAL searchCourseController ERROR", 500));
  }
};
