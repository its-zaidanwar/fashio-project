import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const generateAccessToken = ({userId , role})=>{
    const accessToken = jwt.sign({userId , role} , config.ACCESS_TOKEN , {expiresIn:"15m"})

    return accessToken
}

export const generateRefreshToken = ({userId , role}) =>{
    const refreshToken = jwt.sign({userId , role} , config.REFRESH_TOKEN , {expiresIn:"7d"} )
    return refreshToken
}

export const verifyAccessToken = (accessToken)=>{
    const decode = jwt.verify(accessToken , config.ACCESS_TOKEN)
    return decode
}

export const verifyRefreshToken = (refreshToken)=>{
    const decode = jwt.verify(refreshToken , config.REFRESH_TOKEN)
    return decode 
}