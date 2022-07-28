import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { StaccatoModule } from './src/staccato.module';

async function bootstrap() {
  const app = await NestFactory.create(StaccatoModule);

  const config = new DocumentBuilder()
    .setTitle('Staccato')
    .setDescription('Album Database API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  await app.listen(8080);
}
bootstrap();