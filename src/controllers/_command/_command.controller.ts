import { Body, Controller, ParseArrayPipe, Post, ValidationPipe } from '@nestjs/common';
import { CommandService } from './_command.service';
import { Command_DTO } from 'src/shared/dto/command.dto';

@Controller('command')
export class CommandController {

    constructor(private readonly commandService : CommandService) {}

    @Post("one")
    addOneCommand(
        @Body(ValidationPipe) oneCommand : Command_DTO
    ) : Promise<any>
    {
        try{
            this.commandService.addOneCommand(oneCommand)
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
            this.commandService.addCommand(list)
        }
        catch(error){
            console.log(error)
            return error
        }
    }

}
