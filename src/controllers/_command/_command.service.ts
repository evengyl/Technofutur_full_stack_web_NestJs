import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Command_DTO } from 'src/shared/dto/command.dto';
import { CommandEntity } from 'src/shared/entities/command/command.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommandService {


    constructor(
        @InjectRepository(CommandEntity) private readonly CommandRepo : Repository<CommandEntity>
    ){ }


    async getAllCommand()
    {
        return await this.CommandRepo.findAndCount({
            relations : { type : true}
        })
    }

    
    async getAllCommandAdmin()
    {
        return await this.CommandRepo.findAndCount({
            withDeleted : true,
            relations : { type : true}
        })
    }

    async getOneCommand(id : number)
    {
        return await this.CommandRepo.find({
            where : { id : id},
            relations : { type : true }
        })
    }


    async addCommand(list : Command_DTO[])
    {
        console.log(list)
        let returnedData = await this.CommandRepo.save(list)

        return await { returnedData }
    }


    async addOneCommand(one : Command_DTO)
    {
        let returnedData = await this.CommandRepo.save(one)

        return await { returnedData }
    }


    async updateOneCommand(id : number, updatedCommand : Command_DTO)
    {
        let updatedCommandEntity = this.CommandRepo.create({ id : id , ...updatedCommand})

        let updatedCommandOk = await this.CommandRepo.save(updatedCommandEntity)

        return await { updatedCommandOk }
    }

    async deleteCommand(id : number)
    {
        let idFounded = await this.CommandRepo.findOneByOrFail({ id })
        .catch(err => {
            throw new HttpException('Commande non trouvée', HttpStatus.NOT_FOUND)
        })

        //delete de la db totalement ! (hard delete by entity)
        //let removedCommand = await this.CommandRepo.remove(idFounded)

        //delete de la db totalement ! (hard delete by criteria)
        //let deletedCommand = await this.CommandRepo.delete({ id : id })

        
        //let softRemoveCommand = await this.CommandRepo.softRemove(idFounded)
        let softDeletedCommand = await this.CommandRepo.softDelete({ id : idFounded.id })

       return { softDeletedCommand }
    }


    async reopenCommand(id : number)
    {
        let idFounded = await this.CommandRepo.findOneOrFail({
            where : { id : id },
            withDeleted : true
        })
        .catch(err => {
            throw new HttpException('Commande non trouvée', HttpStatus.NOT_FOUND)
        })

        //let recoverCommand = await this.CommandRepo.recover(idFounded)
        let restoreCommand = await this.CommandRepo.restore({ id : idFounded.id})

        return { restoreCommand }

    }

    async checkCommandId(id : number)
    {
        return await this.CommandRepo.findOneByOrFail({ id })
        .catch(err => {
            throw new HttpException('Commande non trouvée', HttpStatus.NOT_FOUND)
        })
    }
}
