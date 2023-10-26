import { Module } from '@nestjs/common';
import { CommandController } from './_command.controller';
import { CommandService } from './_command.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandEntity } from 'src/shared/entities/command/command.entity';
import { TypeRegimeEntity } from 'src/shared/entities/typeRegime/typeRegime.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CommandEntity,
      TypeRegimeEntity
    ])
  ],
  controllers: [CommandController],
  providers: [CommandService]
})
export class CommandModule {}
