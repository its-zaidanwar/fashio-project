import authModel from "../models/auth.models.js";
import { verifyAccessToken } from "../utils/auth.js";

export const authenticate = async (req , res , next)=>{

    const accessToken = req.headers.authorization?.split(" ")[1]; // accessToken taken out

    if(!accessToken){
        return res.status(401).json({
            message:"Accesss token is not found in the request header"
        })
    }

    try {
        const decode = verifyAccessToken(accessToken)

        const user = await authModel.findById(decode.userId);

        // if user is deleted from db he will still be able to access everything for 15m to avoid that we do this
        if(!user){
            return res.status(401).json({
                message:"User not found please login again"
            })
        }

        //restrict admin authentication

        if(user.role === "admin" && user.access === false){
            return res.status(403).json({
                message:"Your admin access has been restricted"
            })
        }



        req.user = {
            userId: user._id,
            role: user.role
        }// if accesstoken is fond and verified and if its valaid then add it into req.user & is tarika sa is liya likha q ki agar sirf decode kar deta then role 15 min tak chnage nahi hota hai instantly kar  na ka liya this

        next()

    } catch (error) {
        res.status(401).json({
            message: "Invalid or expired access token"
        })
    }
}

