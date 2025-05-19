import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from '../src/app.module';

let app: INestApplication;

async function getApp() {
  if (!app) {
    app = await NestFactory.create(AppModule);

    app.enableCors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
    });

    // Configuração do Swagger em formato simplificado
    const config = new DocumentBuilder()
      .setTitle('Invoice Management API')
      .setDescription('API para gerenciamento de faturas')
      .setVersion('1.0')
      .addTag('invoices')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document, {
      useGlobalPrefix: false,
    });

    await app.init();
  }
  return app;
}

export default async function handler(req, res) {
  const nestApp = await getApp();
  const server = nestApp.getHttpAdapter().getInstance();

  await new Promise((resolve) => {
    server(req, res, resolve);
  });
}
