import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { TypeRegimeService } from './_type_regime.service';
import { TypeRegime_DTO } from 'src/shared/dto/typeRegime.dto';
import { TypeRegimeUpdateDesc_DTO, TypeRegimeUpdate_DTO } from 'src/shared/dto/typeRegime.dto.update';

@Controller('typeregime')
export class TypeRegimeController {

    constructor(private readonly typeReServe : TypeRegimeService){}


    @Get()
    findAll()
    {
        try
        {
            return this.typeReServe.findAll()
        }
        catch(error)
        {
            return error
        }
    }

    @Get(":id")
    findOne(
        @Param("id", ParseIntPipe) idRegime : number
    )
    {
        try
        {
            return this.typeReServe.findOne(idRegime)
        }
        catch(error)
        {
            return error
        }
    }


    @Get(":id/command")
    getAllCommandByTypeRegime(
        @Param("id", ParseIntPipe) idRegime : number
    )
    {
        try
        {
            return this.typeReServe.getAllCommandByTypeRegime(idRegime)
        }
        catch(error)
        {
            return error
        }
    }


    @Post()
    create(
        @Body(ValidationPipe) newType : TypeRegime_DTO
    )
    {
        try
        {
            return this.typeReServe.create(newType)
        }
        catch(error)
        {
            return error
        }
    }

    @Patch()
    update(
        @Body(ValidationPipe) updateType : TypeRegimeUpdate_DTO
    )
    {
        try
        {
            return this.typeReServe.update(updateType)
        }
        catch(error)
        {
            return error
        }
    }

    @Delete(":id")
    delete(
        @Param("id", ParseIntPipe) idRegime : number
    )
    {
        try
        {
            return this.typeReServe.delete(idRegime)
        }
        catch(error)
        {
            return error
        }
    }
}
