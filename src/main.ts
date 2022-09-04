/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuramos para usar pipes globales
  //
  //
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,                    // Remueve la información recibida que no es esperada
      forbidNonWhitelisted: true,         // Arroja un 400 si la propiedad recibida no pertenece al class validator
    }),
  );

  await app.listen(3000);
}
bootstrap();
