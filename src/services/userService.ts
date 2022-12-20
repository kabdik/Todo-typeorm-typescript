import { AppDataSource } from "../data-source";
import { Todo } from "../entity/Todo";
import { User } from "../entity/User";

const userRepository = AppDataSource.getRepository(User);

export const findUserById = async (id: number) => {
    return await userRepository.findOne({ where: { id } });
};
