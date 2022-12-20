import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Todo } from "../entity/Todo";
import { User } from "../entity/User";
import { createTodo, deleteTodo, findAll } from "../services/TodoService";
import { findUserById } from "../services/UserService";

class TodoController {

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        const userId:number=req.user.id
        const todos=await findAll(userId)
        return res.json(todos)
    };

    create=async (req:Request,res:Response,next:NextFunction)=>{
        try {
            
            const input:Partial<Todo>=req.body
            const userId:number=req.user.id
            const user:User=await findUserById(userId)
            const todo:Todo=await createTodo(input,user)
            return res.json(todo)            
        } catch (error) {
            next(error)
        }
    }

    delete=async(req:Request,res:Response,next:NextFunction)=>{
        try {
            const todoId:number=parseInt(req.params.id)
            const del=await deleteTodo(todoId)
            return res.json(del.affected)
        } catch (error) {
            next (error)
        }
    }
}

export default new TodoController();
