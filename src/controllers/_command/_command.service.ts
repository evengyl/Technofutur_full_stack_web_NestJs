import { Injectable } from '@nestjs/common';
import { Command_DTO } from 'src/shared/dto/command.dto';

@Injectable()
export class CommandService {


    async addCommand(list : Command_DTO[])
    {
        console.log(list)
        return await { message : "Nous avons bien recu VOS commandes, merci XoXo"}
    }


    async addOneCommand(one : Command_DTO)
    {
        console.log(one)
        return await { message : "Nous avons bien recu votre commande, merci XoXo"}
    }
}
