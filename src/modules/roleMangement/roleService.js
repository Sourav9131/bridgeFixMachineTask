import userModel from "../authentication/userModel.js";



export async function findRole(role) {


    return await userModel.find({"roles":{"$in":role}})

    
}
