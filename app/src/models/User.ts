import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}

// import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

// @Entity()
// export class User {

//     @PrimaryGeneratedColumn('uuid')
//     userid: string;

//     @Column({
//         length: 100
//     })
//     name: string;

//     @Column("text")
//     description: string;

//     @Column()
//     filename: string;

//     @Column("double")
//     views: number;

//     @Column()
//     isPublished: boolean;
// }