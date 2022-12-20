import { AppDataSource } from "../data-source";
import { Todo } from "../entity/Todo";
import { User } from "../entity/User";
const todoRepository = AppDataSource.getRepository(Todo);

export const createTodo = async (input: Partial<Todo>, user: User) => {
    return await todoRepository.save(todoRepository.create({ ...input, user }));
};

export const findAll = async (userId: number) => {
    return await AppDataSource.createQueryBuilder()
    .select("todo")
    .from(Todo,"todo")
    .leftJoin("todo.user","user")
    .where("user.id=:userId",{userId})
    .getMany()
    // return await todoRepository.findOne({ where: {User.id:userId } });
};

export const deleteTodo=async (id:number) => {
    return await AppDataSource.createQueryBuilder()
    .delete()
    .from(Todo,"todo")
    .where("todo.id=:id",{id})
    .execute()
}
