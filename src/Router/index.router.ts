import BaseRouter from "./Base.router";
import TodoRouter from "./Todo.router";
import UserRouter from "./User.router";

class IndexRouter extends BaseRouter {
    public routes(): void {
        this.router.use("/todo", TodoRouter);
        this.router.use("/user", UserRouter);
    }
}

export default new IndexRouter().router;
