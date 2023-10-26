import { OmitType, PartialType, PickType } from "@nestjs/mapped-types";
import { TypeRegime_DTO } from "./typeRegime.dto";
import { IsDefined, IsNumber } from "class-validator";

export class TypeRegimeUpdate_DTO extends PartialType(TypeRegime_DTO)
{
    @IsDefined()
    @IsNumber()
    id : number
}
//permet de nullifier toute les props du dto principale pour un update !!!


export class TypeRegimeUpdateDesc_DTO extends PickType(TypeRegime_DTO, ["desc"])
{
    @IsDefined()
    @IsNumber()
    id : number
}
//permet de ne prendre que certaine partie du dto principale !

export class TypeRegimeUpdateName_DTO extends OmitType(TypeRegime_DTO, ["desc"])
{
    @IsDefined()
    @IsNumber()
    id : number
}
//permet de ne pas prendre certaine partie du dto principale !