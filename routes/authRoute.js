const express=require("express");
const {registerController,signInController}=require("../controllers/authController");
let router=express.Router();

/*
@access public
@http method post
@url /api/auth/register
*/
router.post("/register",registerController)

/*
@access public
@http method post
@url /api/auth/signIn
*/
router.post("/signin",signInController)
module.exports=router;