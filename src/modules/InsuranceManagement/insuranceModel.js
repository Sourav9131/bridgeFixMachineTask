import express from "express"
import mongoose from "mongoose"




const insuranceSchema =mongoose.Schema({

    userId:{
        type:mongoose.Types.ObjectId,
        
    },

    insuranceName: {
        type: String,
        
    },
   
    Benefits:{
        type:String
    },

    claimAmount:{
    type:Number
   },

   Validity:{
    type:Date
    
   },

   isDeleted:{
    type:Boolean,
    default:false
   }
   

})

const insuranceModel = new mongoose.model("insurance", insuranceSchema)

export default insuranceModel;