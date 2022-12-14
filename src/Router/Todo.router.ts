import BaseRouter from "./Base.router";

class TodoRouter extends BaseRouter {
    public routes(): void {
        this.router.get("/", (req, res, next) => {
            res.send("hi there!!!!!!!!!");
        });
        this.router.post("/");
        this.router.get("/:id");
        this.router.put("/:id");
        this.router.delete("/:id");
    }
}

export default new TodoRouter().router;
