import { Module } from '@nestjs/common';
import { MenuModule } from './controllers/_menu/_menu.module';
import { SearchModule } from './controllers/_search/_search.module';
import { CommandModule } from './controllers/_command/_command.module';

@Module({
  imports: [MenuModule, SearchModule, CommandModule]
})
export class AppModule {}
