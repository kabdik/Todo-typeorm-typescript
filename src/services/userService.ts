import { Request } from "express";

class UserService{
    body:Request['body']
    constructor(req:Request){
        this.body=req.body
    }    
}