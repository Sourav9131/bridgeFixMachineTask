import express from "express"
import mongoose from "mongoose"


// const roleEnum=["superAdmin","bankAdmin","bankUser"]
const userSchema =mongoose.Schema({

    name: {
        type: String,
        
    },
   
    email:{
        type:String
    },

   password:{
    type:String
   },

   roles:[{
    type:String
   }],
   isDeleted:{
    type:Boolean,
    default:false
   }

})

const userModel = new mongoose.model("user", userSchema)

export default userModel;