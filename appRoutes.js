import express from "express";
import userRoutes from "./src/modules/authentication/authRoutes.js";
import roleRoutes from "./src/modules/roleMangement/roleRoutes.js";
import insuRoutes from "./src/modules/InsuranceManagement/insuranceRoutes.js";


//call the express router
const appRoutes= express()

//user routes
appRoutes.use("/api/v1",userRoutes)

//rolerouting
appRoutes.use("/api/v1",roleRoutes)

//insurnece routes
appRoutes.use("/api/v1",insuRoutes)






export default appRoutes;