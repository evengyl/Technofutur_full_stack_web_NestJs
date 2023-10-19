import { Module } from '@nestjs/common';
import { MenuController } from './_menu.controller';
import { MenuService } from './_menu.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuEntity } from 'src/shared/entities/menu/menu.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MenuEntity
    ])
  ],
  controllers: [MenuController],
  providers: [MenuService]
})
export class MenuModule {}
