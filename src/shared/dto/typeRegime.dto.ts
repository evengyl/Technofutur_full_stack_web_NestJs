import { IsDefined, IsOptional } from "class-validator"

export class TypeRegime_DTO{

    @IsDefined()
    name : string

    @IsOptional()
    desc : string
}

export class TypeRegimeCommand_DTO{
    @IsDefined()
    id : number
}