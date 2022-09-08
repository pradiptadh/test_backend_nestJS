import { Column, Entity , PrimaryColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryColumn()
    userid: string;

    @Column()
    password: string;
}