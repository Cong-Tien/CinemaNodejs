import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express'
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //cors
  app.use(express.static("*")) // định vị lại đường dẫn dể load tài nguyên
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder().setTitle("Swagger").setVersion("1000").addBearerAuth().build();
  const document = SwaggerModule.createDocument(app,config)
  
  SwaggerModule.setup("/swagger",app,document)

  await app.listen(3000);
}
bootstrap();
