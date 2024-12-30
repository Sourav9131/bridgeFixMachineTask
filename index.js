
import express from "express"
import dotenv from "dotenv";
import { dbConnect } from "./config/dbConfig.js";
import appRoutes from "./appRoutes.js";

dotenv.config();

//constants
const PORT=process.env.PORT

const app=express();


//body parser 
app.use(express.json());

//internalRoutes
app.use(appRoutes)

//DB Connect
dbConnect()



//server
app.listen(PORT,()=>{

    console.log(`server is listening on ${PORT}`)
})