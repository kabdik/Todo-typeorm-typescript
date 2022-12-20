import { create } from "domain";
import TodoController from "../controller/TodoController";
import { checkJWT } from "../middleware/authMiddleware";
import BaseRouter from "./Base.router";

class TodoRouter extends BaseRouter {
    public routes(): void {
        this.router.get("/",TodoController.getAll);
        this.router.post("/",TodoController.create);
        this.router.get("/:id");
        this.router.put("/:id");
        this.router.delete("/:id",TodoController.delete);
    }
}

export default new TodoRouter().router;
