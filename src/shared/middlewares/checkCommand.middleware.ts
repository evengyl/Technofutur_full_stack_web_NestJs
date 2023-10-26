import { Injectable, NestMiddleware } from "@nestjs/common";
import { CommandService } from "src/controllers/_command/_command.service";


@Injectable()
export class CheckCommandMiddleware implements NestMiddleware{
    
    constructor(
        private readonly commandServe: CommandService
    ){

    }
    
    async use(req: any, res: any, next: (error?: any) => void) {

        let idCommandToVerify = req.params.id

        await this.commandServe.checkCommandId(idCommandToVerify)

        next()
    }

}