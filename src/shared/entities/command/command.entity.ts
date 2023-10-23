import moment from "moment-timezone";
import { BeforeInsert, BeforeSoftRemove, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { LifeTime } from "../lifetime.entity";


export enum TypeRegime {
    CARNOS = "Carnassier",
    VEGE = "Végétarien",
    VEGAN = "Végétalien"
}


@Entity("command")
export class CommandEntity extends LifeTime
{
    @PrimaryGeneratedColumn()
    id : number

    @Column({ default: TypeRegime.CARNOS })
    type : string

    @Column({type : "tinyint", default : 1})
    qty : number

    @Column({ type: "simple-array", nullable : true})
    add : string[]

    @Column({ type: "simple-array", nullable : true})
    rem : string[]
}


class OtherLifeCycle{
    @BeforeUpdate()
    UpdateCreated(){
        this.updateAt = new Date(moment().tz("Europe/Brussels").format("YYYY-MM-DD HH:mm:ss"))
    }

    
    @UpdateDateColumn()
    updateAt : Date

}