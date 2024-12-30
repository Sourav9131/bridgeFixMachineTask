import userModel from "../authentication/userModel.js";
import insuranceModel from "./insuranceModel.js";


export async function registerinsurence( data){

    return await insuranceModel.create(data);

}



export async function findRoles(id) {

let role=["superAdmin"]
    return await userModel.findById({_id:id,"roles":{"$in":role}})

    
}


export async function getInsurence() {

   
        return await insuranceModel.find()
    
        
    }

