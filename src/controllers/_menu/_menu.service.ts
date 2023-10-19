import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuEntity } from 'src/shared/entities/menu/menu.entity';
import { Repository } from 'typeorm';



//COUCHE BUSINESS ! CONTACT ET UTILISE LA COUCHE MODEL (DB)
@Injectable()
export class MenuService {

    constructor(
        @InjectRepository(MenuEntity) private readonly MenuRepos : Repository<MenuEntity>
    ){}

    async getAllMenu(pageName : string, type : string) : Promise<any[]> {

        if(pageName == null)
            console.log("Tout le menu")
        else
            console.log("Page du menu voulue : " + pageName)

        if(type == null)
            console.log("Pour tous le monde")
        else
            console.log("Type de préférence du menu voulue : " + type)

        

        let tmpFind =  await this.MenuRepos.find({
            select : {
                name : true,
                price : true
            }
        }) // select name, price

        let tmpFind2 = await this.MenuRepos.find() // select *

        let tmpFindBy =  await this.MenuRepos.findBy({
            pageName : "Digestifs"
        }) // select * where

        let tmpFindCount = await this.MenuRepos.findAndCount() // return la liste + le counter total

        return tmpFind2
    }


    async getOneDish(id : number) : Promise<any> {

        let tmp =  await this.MenuRepos.findOne({
            select : { price : true, name : true },
            where : { id : id } 
        })


        let tm2 =  await this.MenuRepos.findOneBy({ id : id })
        //quand il y a un "by" c'est directement la condition where dans un obj !!!


        let tmpFail = await this.MenuRepos.findOneOrFail({
            select : { price : true, name : true },
            where : { id : id } 
        })
        .catch(err => {
            throw new HttpException('Non trouvé dans le menu !', HttpStatus.NOT_FOUND)
        })

        
        let tmpFail2 = await this.MenuRepos.findOneByOrFail({ id : id })
        .catch(err => {
            throw new HttpException('Non trouvé dans le menu !', HttpStatus.NOT_FOUND)
        })

        return tmpFail2
    }
}
