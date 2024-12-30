import userModel from "./userModel.js";
import * as userService from "./authService.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function userRegister(req,res){

    try {
    
    const {name,password,roles,email}=req.body;

    if(!name || !password || !roles || !email ){
        return   res.send({
               status:400, message:"missing field is required"
           })
       }

    let checkUser = await userService.findUserByEmail(email)

    
    
    if(checkUser ){
     return   res.send({
            status:400, message:"User Already register with this email"
        })
    }
    
    let encryptedPassword = await bcrypt.hash(password, 8);

    let userSignUp= await userService.registerUser( name,encryptedPassword,roles,email)
    
       res.send({status:201,msg:"user singup successfuly"})
    
    
        
    } catch (error) {
        
        console.log(error)
        return   res.send({
            status:500, message:"something went wrong"
        })
    }
    
    } 
    
    

    export async function login(req, res) {
        try {
          let { email, password} = req.body;

          if( !password || !email ){
            return   res.send({
                   status:400, message:"missing field is required"
               })
           }

      
          let user = await userService.loginUser(email);
      
          if (!user) {
            return res
              .status(400)
              .send({ status: false, message: "User not found" });
          } else {
      
            let comparePassword = bcrypt.compareSync(
              password,
              user.password
            );
      
            if (!comparePassword) {
              return res
                .status(200)
                .send({ status: false, message: "Incorrect Password" });
            }
          }


      
      
          const token= jwt.sign(
            { userId: user?._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRATION }
          );

      
      
          return res.status(200).send({
            status: true,
            message: "User logged in successfully",
            data: user,
            token: token,
          });
        } catch (error) {
      
            console.log(error,"dd");
            
          res.status(500).send({ message: "something went wrong" });
        }
      }
