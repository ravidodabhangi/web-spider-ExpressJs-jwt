const express = require("express");
const multer = require("multer");
const {
  createCourseController,
  courseAllFetch,
  courseSingleFetch,
  courseDelete,
  courseUpdate,
} = require("../controllers/courseController");
const { storage } = require("../middlewares/multer");
let upload = multer({ storage });
const router = express.Router();

router.post(
  "/create-course",
  upload.any(["course_image", "course_video"]),
  createCourseController
);
router.get("/getCourses", courseAllFetch);
router.get("/:id", courseSingleFetch);
router.put("/:id", upload.any(["course_image", "course_video"]), courseUpdate);
router.delete("/delete/:id", courseDelete);
module.exports = router;
