import express from "express";
import * as insuController from "./insuranceController.js"
import authMiddleware from "../../middleware/verifyMiddleware.js";

const insuRoutes= express();



//retrive list 
insuRoutes.post("/create-insurence",authMiddleware,insuController.createInsurance)


//get Insurnece
insuRoutes.get("/get-insurence",authMiddleware,insuController.getInsurance)









export default insuRoutes;
