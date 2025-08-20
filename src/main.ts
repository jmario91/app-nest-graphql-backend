 
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 // ✅ Habilitar CORS
  app.enableCors({
    origin: 'http://localhost:3000', // origen del frontend
    credentials: true,
  });
  // Validaciones globales
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));

  await app.listen(4000);
  console.log(`🚀 App corriendo en: http://localhost:4000/graphql`);
}
bootstrap();
