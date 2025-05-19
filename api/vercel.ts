import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from '../src/app.module';

let cachedServer: any;

async function createServer() {
  const app = await NestFactory.create(AppModule);

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

  // Configurar Swagger em múltiplas rotas
  SwaggerModule.setup('', app, document);
  SwaggerModule.setup('api', app, document);
  SwaggerModule.setup('docs', app, document);

  await app.init();

  return app;
}

export default async function handler(req: any, res: any) {
  if (!cachedServer) {
    cachedServer = await createServer();
  }

  const server = cachedServer;
  const httpAdapter = server.getHttpAdapter();

  // Forçar o prefixo correto para a request
  req.originalUrl = req.url;

  return httpAdapter.getInstance()(req, res);
}
