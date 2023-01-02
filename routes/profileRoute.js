const express=require("express");
const {getProfileController,CreateProfileController,getMeProfile}=require("../controllers/profileController")
const {Protected}=require("../helpers/authProtecteor")
const router=express.Router();

router.get("/",Protected,getProfileController);
router.post("/create-profile",Protected,CreateProfileController)
router.get("/getMe",Protected,getMeProfile);

module.exports=router;
