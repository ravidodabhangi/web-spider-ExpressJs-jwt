const express = require("express");
const { NODE_ENV, PORT } = require("./config");
const ErrorHandler = require("./middlewares/Errorhandler");
const { success, error, info } = require("consola");
const cookieparser = require("cookie-parser");
const courseRoute = require("./routes/courseRoute");
const connectDb = require("./config/db");
const authRoute = require("./routes/authRoute");
const profileRoute=require("./routes/profileRoute")
const studentRoute=require("./routes/studentRoute");
const morgan = require("morgan");
const app = express();

//middlewear
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());

let startServer = async () => {
  try {
    connectDb();
    if (NODE_ENV === "development") {
      app.use(morgan("dev"));
    }
    //mount route this always above errhandler.....
    app.use("/api/course", courseRoute);
    app.use("/api/auth", authRoute);
    app.use("/api/profile",profileRoute);
    app.use("/api/student",studentRoute);
    //middleware section always put this one last.....
    app.use(ErrorHandler);
    app.listen(PORT, (err) => {
      if (err) throw err;
      info(`web spider app is running on Port number ${PORT}`);
    });
  } catch (err) {
    error(err);
  }
};
startServer();
