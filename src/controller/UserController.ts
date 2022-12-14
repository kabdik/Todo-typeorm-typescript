import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";
import  ApiError  from "../../exception/apiError";
import * as jwt from "jsonwebtoken";
const key="KEY"
class UserController {
    private userRepository=AppDataSource.getRepository(User);
    async  registration(req: Request, res: Response, next: NextFunction){
        try {
            console.log(this);
            
            const { email, name, password } = req.body;

            const user = new User();
            user.email = email;
            user.name = name;
            user.password = password;
            console.log(user);

            if (await this.userRepository.findOneBy({ email })) {
                return next(ApiError.BadRequest("The user already exists"))
            }

            await this.userRepository.save(user);
            console.log("kek");

            return res.json(user);
        } catch (error) {
            next(error)
        }
    };

    login=async (req: Request, res: Response, next: NextFunction) => {
        try {
            
            const { email, password } = req.body;
            const user = await this.userRepository.findOne({ where: { email } });
            
            if (!user) {
                next(ApiError.BadRequest("No user with such email"));
            }
            if (!User.comparePassword(password, user.password)) {
                next(ApiError.BadRequest("Wrong password or login!"))
            }
            res.json({ token: this.signJWT(user.id,user.email) });
        } catch (error) {
            next(error);
        }
    }
    private signJWT(id:number,email:string):string {
        return jwt.sign({id,email},key,{expiresIn:'24h'})
    }
}
export default new UserController()