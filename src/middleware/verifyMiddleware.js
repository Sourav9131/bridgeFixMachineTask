import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {

    let tokenMatch = req.headers.authorization?.split('Bearer ')[1]
    

if (!tokenMatch ) {
  return res
    .status(401)
    .json({ success: false, message: "Invalid authorization header" });
}   

jwt.verify(tokenMatch,process.env.JWT_SECRET,(err,user)=>{

    if(err){
        return res.status(400).send({status:false,msg:"not verify"})
    }

console.log(user.userId,"from this")

    req.userId =user.userId

    next()
})
  
};
export default authMiddleware;    