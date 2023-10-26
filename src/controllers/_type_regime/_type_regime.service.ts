import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeRegime_DTO } from 'src/shared/dto/typeRegime.dto';
import { TypeRegimeUpdate_DTO } from 'src/shared/dto/typeRegime.dto.update';
import { TypeRegimeEntity } from 'src/shared/entities/typeRegime/typeRegime.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TypeRegimeService {

    constructor(
        @InjectRepository(TypeRegimeEntity) private readonly typeRegimeRepos : Repository<TypeRegimeEntity>
    ){}


    async findAll(){
        return await this.typeRegimeRepos.find()
    }


    async findOne(id : number){
        return await this.typeRegimeRepos.findOne({
            where : { id : id}
        })
    }


    async getAllCommandByTypeRegime(idRegime : number){
        return await this.typeRegimeRepos.findOne({
            where : { id : idRegime},
            relations : { commands : true }
        })
    }


    async create(newType : TypeRegime_DTO){
        return await this.typeRegimeRepos.save(newType)
    }

    async update(updateType : TypeRegimeUpdate_DTO)
    {
        return await this.typeRegimeRepos.save(updateType)
    }


    async delete(id : number){
        return await this.typeRegimeRepos.delete({ id : id})
    }
}
