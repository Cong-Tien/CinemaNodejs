import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express'
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //cors
  app.use(express.static("*")) // định vị lại đường dẫn dể load tài nguyên

  const config = new DocumentBuilder().setTitle("Swagger").addBearerAuth().build();
  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup("/api",app,document)

  await app.listen(3000);
}
bootstrap();
