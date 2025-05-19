import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from '../src/app.module';

let app;

async function bootstrap() {
  if (!app) {
    app = await NestFactory.create(AppModule);

    app.enableCors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
    });

    // Configuração do Swagger
    const config = new DocumentBuilder()
      .setTitle('Invoice Management API')
      .setDescription('API para gerenciamento de faturas')
      .setVersion('1.0')
      .addTag('invoices')
      .build();

    const document = SwaggerModule.createDocument(app, config);

    // Muito importante: Expor o documento JSON do Swagger
    app.use('/api-docs/swagger.json', (req, res) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(document);
    });

    await app.init();
  }

  return app;
}

// Handler serverless da Vercel
export default async function handler(req, res) {
  const server = await bootstrap();
  const httpAdapter = server.getHttpAdapter();

  return httpAdapter.getInstance()(req, res);
}
