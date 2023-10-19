import { Module } from '@nestjs/common';
import { MenuModule } from './controllers/_menu/_menu.module';
import { SearchModule } from './controllers/_search/_search.module';
import { CommandModule } from './controllers/_command/_command.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    MenuModule,
    SearchModule,
    CommandModule,
    TypeOrmModule.forRoot({
      type: "mssql",
      host: "localhost",
      port: 1433,
      username: "evengyl",
      password: "test1234",
      database: "demo_fs_web_nestjs",
      extra: {
        trustServerCertificate: true,
        validateConnection: false
      },
      entities: [__dirname + "/**/*.entity.{ts, js}"],
      autoLoadEntities: true,
      synchronize: true
    })
  ]
})
export class AppModule {}
