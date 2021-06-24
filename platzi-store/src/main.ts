import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Eliminar paramtros que no estan en los DTOs
      forbidNonWhitelisted: true, // Devolver un error si hay campos invalidos en un DTO
    }),
  );
  await app.listen(3000);
}
bootstrap();
// Puedo usar los metodos de validation-class para validar los datos de un DTO.
// Existe una clase de PartialType que nos permite crear una clase que extienda del DTO y se vuelva Partial<Class>.
