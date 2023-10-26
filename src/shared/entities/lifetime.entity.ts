import moment from 'moment';
import 'moment-timezone';
import { BeforeUpdate, BeforeInsert, BeforeSoftRemove, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"

export class LifeTime{
    @BeforeUpdate()
    UpdateCreated(){
        this.updateAt = new Date(moment().tz("Europe/Brussels").format("YYYY-MM-DD HH:mm:ss"))
    }

    @BeforeInsert()
    UpdateInstert(){
        this.updateAt = new Date(moment().tz("Europe/Brussels").format("YYYY-MM-DD HH:mm:ss"))
    }

    @BeforeSoftRemove()
    UpdateRemove(){
        this.updateAt = new Date(moment().tz("Europe/Brussels").format("YYYY-MM-DD HH:mm:ss"))
    }


    @CreateDateColumn()
    createAt : Date

    @UpdateDateColumn()
    updateAt : Date

    @DeleteDateColumn()
    deleteAt : Date
}