import express from "express";
import * as roleController from "./roleController.js"

const roleRoutes= express();



//retrive list 
roleRoutes.post("/role_base_listing",roleController.roleBaseListing)








export default roleRoutes;
