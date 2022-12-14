import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Todo } from "../entity/Todo";

export class TodoController{
    private todoRepo=AppDataSource.getRepository(Todo)

    async getAll(req:Request,res:Response,next:NextFunction){
        
    }
}