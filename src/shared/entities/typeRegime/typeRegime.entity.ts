import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CommandEntity } from "../command/command.entity";

@Entity("type_regime")
export class TypeRegimeEntity{

    @PrimaryGeneratedColumn()
    id : number


    @Column({ type : "nvarchar", length : "30", default : "NA", nullable : true})
    name : string


    @Column({ type : "nvarchar", length : "200", default : "NC", nullable : true})
    desc : string

    @OneToMany(() => CommandEntity, (command) => command.type, { cascade : ["insert", "update"] })
    commands : CommandEntity
}