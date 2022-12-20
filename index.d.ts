import { Express } from "express-serve-static-core";

export interface JwtPayload {
    id: number;
    email: string;
    iat: number;
    exp: number;
}
declare module "express-serve-static-core" {
    interface Request {
        user: JwtPayload;
    }
}
