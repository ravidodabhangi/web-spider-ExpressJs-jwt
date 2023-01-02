const express=require("express");
const{studentDataController,studentDataDelete,searchCourseController}=require("../controllers/studentController");
const router=express.Router();

router.put("/create_Student",studentDataController);
router.put("/:body",studentDataDelete);
router.get("/getCourse/:id",searchCourseController);

module.exports=router;