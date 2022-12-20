import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Todo extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    header: string;

    @Column()
    description: string;

    @Column({default:false})
    completed: boolean;

    @ManyToOne(()=>User,(user)=>user.todos,{onDelete:"CASCADE"})
    user:User
}
