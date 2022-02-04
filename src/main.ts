import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Kendo Search API')
    .setDescription('Kendo Search API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(5000);
}
bootstrap();
