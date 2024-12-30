import express from "express";
import * as userController from "./authController.js"

const userRoutes= express();

//signup route
userRoutes.post("/signup",userController.userRegister)


//login routes
userRoutes.post("/login",userController.login)





export default userRoutes;
