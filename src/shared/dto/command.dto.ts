import { IsArray, IsDefined, IsNumber, Max, Min, ValidateNested } from "class-validator"
import { TypeRegimeCommand_DTO, TypeRegime_DTO } from "./typeRegime.dto"
import { Type } from "class-transformer"

export class Command_DTO
{
    @IsDefined()
    @ValidateNested()
    @Type(() => TypeRegimeCommand_DTO)
    type : TypeRegimeCommand_DTO

    @IsDefined()
    @IsNumber()
    @Min(1)
    @Max(99)
    qty : number

    @IsArray()
    add : string[]

    @IsArray()
    rem : string[]

}



