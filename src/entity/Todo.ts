import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    header: string;

    @Column()
    description: string;

    @Column()
    completed: boolean;

    @ManyToOne(()=>User,(user)=>user.todos)
    user:User
}
