
import mongoose from "mongoose"

export async function dbConnect(){

try {
//constant
const MONGO_URL=process.env.MONGO_URL

   mongoose.connect(MONGO_URL);
    console.log("DB Connect")
    
} catch (error) {
    
    console.log("error in connecting to DB");
    process.exit(1)
    
}

}