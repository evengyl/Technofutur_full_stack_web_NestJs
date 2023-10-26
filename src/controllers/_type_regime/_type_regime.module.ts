import { Module } from '@nestjs/common';
import { TypeRegimeController } from './_type_regime.controller';
import { TypeRegimeService } from './_type_regime.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeRegimeEntity } from 'src/shared/entities/typeRegime/typeRegime.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TypeRegimeEntity
    ])
  ],
  controllers: [TypeRegimeController],
  providers: [TypeRegimeService]
})
export class TypeRegimeModule {}
