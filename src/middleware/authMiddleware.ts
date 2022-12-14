import { NextFunction, Request, Response } from "express";
import ApiError from "../../exception/apiError";
import * as jwt from "jsonwebtoken"
const key='KEY'
export function checkJWT(req: Request, res: Response, next: NextFunction) {
    try {
        const header = req.headers.authorization as string;
        if (!header) next(ApiError.UnauthorizedError());
        const token = header.split(" ")[1] as string;
        if (!token) next(ApiError.BadRequest("Invalid token"));
        const payload=jwt.verify(token,key)
        req.user=payload
        next()
    } catch (error) {
        next(error)
    }
}
