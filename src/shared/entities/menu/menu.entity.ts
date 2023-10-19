import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("menu")
export class MenuEntity
{
    @PrimaryGeneratedColumn()
    id : number

    @Column({ default: "NC", nullable: false})
    pageName : string

    @Column({ default: "NC", nullable: false})
    type: string

    @Column({ default: "NC", nullable: false})
    name: string

    @Column({ default: 0.0, nullable: false, type: "float"})
    price: number
}