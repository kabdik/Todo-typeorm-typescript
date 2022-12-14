import UserController from "../controller/UserController";
import BaseRouter from "./Base.router";

class UserRouter extends BaseRouter {
    public routes(): void {
        this.router.post("/login", UserController.login);
        this.router.post("/registration", function (req,res,next) {
            UserController.registration(req,res,next);
        });
    }
}
export default new UserRouter().router;
