import { IsArray, IsDefined, IsNumber, IsString } from "class-validator"

export class Command_DTO
{
    @IsDefined()
    @IsNumber()
    id : number

    @IsDefined()
    @IsString()
    type : string

    @IsDefined()
    @IsNumber()
    qty : number

    @IsArray()
    add : string[]

    @IsArray()
    rem : string[]

}

