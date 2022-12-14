import { checkJWT } from "../middleware/authMiddleware";
import BaseRouter from "./Base.router";

class TodoRouter extends BaseRouter {
    public routes(): void {
        this.router.get("/",checkJWT ,(req, res, next) => {
            console.log(req.user);
            
            res.send("hi there!!!!!!!!!",);
        });
        this.router.post("/");
        this.router.get("/:id");
        this.router.put("/:id");
        this.router.delete("/:id");
    }
}

export default new TodoRouter().router;
