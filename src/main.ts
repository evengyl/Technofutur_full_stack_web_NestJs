import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist : true, //permet de ne pas garder les props envoyée qui ne font pas partie du dto
    transform : true // inconu au bataillons ! 
  }))

  await app.listen(3000);
}
bootstrap();
