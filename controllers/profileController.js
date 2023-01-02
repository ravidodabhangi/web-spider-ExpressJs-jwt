const authModel = require("../models/AuthModel");
const ErrorResponse = require("../utils/ErrorResponse");
const ProfileSchema = require("../models/ProfileModel");
exports.getProfileController = async (req, res, next) => {
  try {
    let user = await authModel.findById(req.user.id);
    res.status(200).json({ success: true, user });
  } catch (error) {
    next(new ErrorResponse("INTERNAL SERVER ERROR", 500));
  }
  // res.status(200).json("Profile Page");
};

exports.CreateProfileController = async (req, res, next) => {
  try {
    let users = await authModel.findOne({ _id: req.user.id });
    let { firstname, lastname, phone, address, dob, city, gender } = req.body;
    let user = users;
    let payload = {
      user,
      firstname,
      lastname,
      phone,
      address,
      dob,
      city,
      gender,
    };
    let data = await new ProfileSchema(payload).save();
    res.status(201).json({
      success: true,
      message: "successfully Profile is created",
      data,
    });
  } catch (error) {
    next(new ErrorResponse("INTERNAL CreateProfileController  ERROR", 500));
  }
};

exports.getMeProfile = async (req, res, next) => {
  try {
    let payload = await ProfileSchema.find().populate("user", [
      "email",
      "role",
    ]);
    res.status(201).json({ success: true, payload });
  } catch (error) {
    next(new ErrorResponse("INTERNAL getMeProfile  ERROR", 500));
  }
};
