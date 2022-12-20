import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"

import { User } from "./entity/User"
import { Todo } from "./entity/Todo"
import { appendFile } from "fs"
import TodoRouter from "./Router/Todo.router"
import indexRouter from "./Router/index.router"
import errorMiddleware from "./middleware/errorMiddleware"
AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(express.json())
    app.use('/api',indexRouter)
    // register express routes from defined application routes
    // Routes.forEach(route => {
    //     (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
    //         const result = (new (route.controller as any))[route.action](req, res, next)
    //         if (result instanceof Promise) {
    //             result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

    //         } else if (result !== null && result !== undefined) {
    //             res.json(result)
    //         }
    //     })
    // })

    // setup express app here
    // ...

    // start express server

    app.use(errorMiddleware)
    app.listen(3000)


    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))

