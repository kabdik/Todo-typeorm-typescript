import { NextFunction, Request, Response } from "express";
import  ApiError  from "../../exception/apiError";

export default function(err,req:Request,res:Response,next:NextFunction){
    if(err instanceof ApiError){
        return res.status(err.status).json({message:err.message, errors:err.errors})
    }
    return res.status(500).json({message:"Unexpected Error"})
}