 
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {graphqlUploadExpress} from 'graphql-upload';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 // ✅ Habilitar CORS
  app.enableCors({
    origin: 'http://localhost:3000', // origen del frontend
    credentials: true,
  });
  // Validaciones globales
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
//Middleware para manejar uploads

app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 5}));


  await app.listen(4000);
  console.log(`🚀 App corriendo en: http://localhost:4000/graphql`);
}
bootstrap();
