import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MenuModule } from './controllers/_menu/_menu.module';
import { SearchModule } from './controllers/_search/_search.module';
import { CommandModule } from './controllers/_command/_command.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeRegimeModule } from './controllers/_type_regime/_type_regime.module';
import { CheckCommandMiddleware } from './shared/middlewares/checkCommand.middleware';
import { CommandService } from './controllers/_command/_command.service';
import { CommandEntity } from './shared/entities/command/command.entity';

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
      synchronize: true,
      //logging : "all"
    }),
    TypeRegimeModule,
    TypeOrmModule.forFeature([
      CommandEntity
    ])
  ],
  providers : [
    CommandService
  ]
})
export class AppModule implements NestModule{
  
  configure(consumer: MiddlewareConsumer) {

    consumer.apply(CheckCommandMiddleware)
    .forRoutes(
      { path : "command/one/:id", method : RequestMethod.PATCH },
      { path : "command/one/:id", method : RequestMethod.DELETE },
      { path : "command/reopen/:id", method : RequestMethod.PATCH }

    )

  }


}
