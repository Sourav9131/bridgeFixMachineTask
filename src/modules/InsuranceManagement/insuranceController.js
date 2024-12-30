import mongoose from "mongoose"
import * as insuService from "./insuranceService.js"


export async function createInsurance(req,res){

    try {

        let userId =new mongoose.Types.ObjectId(req.userId);

        const {insuranceName,Benefits,claimAmount,Validity}=req.body;

        if(!insuranceName|| !Benefits || !claimAmount || !Validity ){
            return   res.send({
                   status:400, message:"missing field is required"
               })
           }
    

           const dataDto={
            insuranceName,Benefits,claimAmount,Validity,userId:userId
           }


     let insuranceData= await insuService.registerinsurence(dataDto)
        
           res.send({status:201,msg:"insurnace created  successfuly"})
    
        
    } catch (error) {
        
        console.log(error)
        return   res.send({
            status:500, message:"something went wrong"
        })
    }
    
    } 
    

    export async function getInsurance(req,res){

        try {
    
            let userId =new mongoose.Types.ObjectId(req.userId);
    
            const userData= await insuService.findRoles(userId )


            if(!userData){
                return   res.send({
                       status:400, message:"Permison denied"
                   })
               }
        
    
    
    
         let insuranceData= await insuService.getInsurence()
            
               res.send({status:200,msg:"insurnace fetch  successfuly",data:insuranceData})
        
            
        } catch (error) {
            
            console.log(error)
            return   res.send({
                status:500, message:"something went wrong"
            })
        }
        
        } 