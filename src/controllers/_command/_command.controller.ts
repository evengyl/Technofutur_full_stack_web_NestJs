import { Body, Get, Controller, Param, Delete, ParseArrayPipe, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { CommandService } from './_command.service';
import { Command_DTO } from 'src/shared/dto/command.dto';

@Controller('command')
export class CommandController {

    constructor(private readonly commandService : CommandService) {}

    @Get()
    getAll() : Promise<any>
    {
        try{
            return this.commandService.getAllCommand()
        }
        catch(error){
            console.log(error)
            return error
        }
    }


    @Get("admin")
    getAllAdmin() : Promise<any>
    {
        try{
            return this.commandService.getAllCommandAdmin()
        }
        catch(error){
            console.log(error)
            return error
        }
    }

    @Post("one")
    async addOneCommand(
        @Body(ValidationPipe) oneCommand : Command_DTO
    ) : Promise<any>
    {
        try{
            return this.commandService.addOneCommand(oneCommand)
        }
        catch(error){
            console.log(error)
            return error
        }
    }


    @Post()
    addCommand(
        @Body(new ParseArrayPipe({items : Command_DTO, whitelist : true})) list : Command_DTO[]
    ) : Promise<any>
    {
        try{
            return this.commandService.addCommand(list)
        }
        catch(error){
            console.log(error)
            return error
        }
    }


    @Patch("one/:id")
    updateOneCommand(
        @Param("id", ParseIntPipe) commandId : number,
        @Body(ValidationPipe) oneCommand : Command_DTO
    ) : Promise<any>
    {
        try{
            return this.commandService.updateOneCommand(commandId, oneCommand)
        }
        catch(error){
            console.log(error)
            return error
        }
    }


    @Patch("reopen/:id")
    reopenCommand(
        @Param("id", ParseIntPipe) commandId : number,
    ) : Promise<any>
    {
        try{
            return this.commandService.reopenCommand(commandId)
        }
        catch(error){
            console.log(error)
            return error
        }
    }


    @Delete("one/:id")
    deleteOneCommand(
        @Param("id", ParseIntPipe) commandId : number,
    ) : Promise<any>
    {
        try{
            return this.commandService.deleteCommand(commandId)
        }
        catch(error){
            console.log(error)
            return error
        }
    }

}
