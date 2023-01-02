const { JWT_COOKIE_EXPIRE, NODE_ENV } = require("../config");
const authSchema = require("../models/AuthModel");
const ErrorResponse = require("../utils/ErrorResponse");

//todo=========================================================================================

exports.signInController = async (req, res, next) => {
  let { email, password } = req.body;
  try {
    let user = await authSchema.findOne({ email }).select("+password");
    if (!email && !password) {
      return next(new ErrorResponse("Email AND PASSWORD ARE REQUIRED", 401));
    }
    if (!user) {
      return next(new ErrorResponse("USER IS NOT EXISTS", 400));
    }
    let matchPasssword = await user.matchPASSWORD(password);
    if (!matchPasssword) {
      return next(new ErrorResponse("PASSWORD IS NOT MATCHED", 401));
    }
    sendResponseToken(user, 201, res);
  } catch (error) {
    next(new ErrorResponse("INTERNAL SIGNIN ERROR", 500));
  }
};

//todo==========================================================================================

const sendResponseToken = function (user, statusCode, res) {
  let TOKEN = user.getTOKEN();
  let options = {
    expires: new Date(Date.now() + JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  if (NODE_ENV === "production") {
    options.secure = true;
  }
  res
    .status(statusCode)
    .cookie("cookie", options, TOKEN)
    .json({ success: true, message: "successfully token fetched", TOKEN });
};

//todo================================================================================================

exports.registerController = async (req, res, next) => {
  try {
    let { username, email, password, role } = req.body;
    let user = await new authSchema({ username, email, password, role }).save();
    sendResponseToken(user, 201, res);
  } catch (err) {
    next(new ErrorResponse("INTERNAL SERVER ERROR", 500));
  }
};
