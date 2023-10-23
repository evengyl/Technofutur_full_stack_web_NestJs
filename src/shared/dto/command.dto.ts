import { IsArray, IsDefined, IsEnum, IsNumber, IsString, Max, MaxLength, Min, MinLength } from "class-validator"
import { TypeRegime } from "../entities/command/command.entity"

export class Command_DTO
{
    @IsDefined()
    @IsEnum(TypeRegime)
    type : TypeRegime

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



