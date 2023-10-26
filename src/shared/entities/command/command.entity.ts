import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { LifeTime } from "../lifetime.entity";
import { TypeRegimeEntity } from "../typeRegime/typeRegime.entity";


@Entity("command")
export class CommandEntity extends LifeTime
{
    @PrimaryGeneratedColumn()
    id : number

    @ManyToOne(() => TypeRegimeEntity, (typeRegime) => typeRegime.id, { cascade : ["insert", "update"] })
    type : TypeRegimeEntity

    @Column({type : "tinyint", default : 1})
    qty : number

    @Column({ type: "simple-array", nullable : true})
    add : string[]

    @Column({ type: "simple-array", nullable : true})
    rem : string[]
}

