import "reflect-metadata"
import { DataSource } from "typeorm"
import { Todo } from "./entity/Todo"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "naimann18",
    database: "todo",
    synchronize: true,
    logging: false,
    entities: [User,Todo],
    migrations: [],
    subscribers: [],
})
