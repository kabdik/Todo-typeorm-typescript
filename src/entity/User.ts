import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BeforeInsert } from "typeorm";
import { Todo } from "./Todo";
import * as bcrypt from "bcrypt";
import { stringify } from "querystring";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true,
    })
    email: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @OneToMany(() => Todo, (todo) => todo.user)
    todos: Todo[];

    @BeforeInsert()
    async hashPassword() {
        
        this.password = await bcrypt.hash(this.password, 5);
    }

    static async comparePassword(candidatePassword: string, hashedPassword: string) {
        
        return await bcrypt.compare(candidatePassword, hashedPassword);
    }
}
