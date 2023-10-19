import { IsArray, IsDefined, IsNumber, IsString, Max, MaxLength, Min, MinLength } from "class-validator"

export class Command_DTO
{
    @IsDefined()
    @IsString()
    @MinLength(4)
    @MaxLength(12)
    type : string

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



