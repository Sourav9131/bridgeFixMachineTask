import userModel from "./userModel.js";



export async function findUserByEmail(email) {
    return await userModel.findOne({email});
}



export async function registerUser( name,encryptedPassword,roles,email){

    return await userModel.create({name,password:encryptedPassword,roles,email});

}


export async function loginUser(email){

    return await userModel.findOne({email:email,isDeleted: false,})

}