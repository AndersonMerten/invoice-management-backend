import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableShutdownHooks();
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // Configuração do Swagger apenas para gerar o documento
  const config = new DocumentBuilder()
    .setTitle('Invoice Management API')
    .setDescription('API para gerenciamento de faturas')
    .setVersion('1.0')
    .addTag('invoices')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Expor apenas o documento JSON do Swagger
  app.use('/api-docs/swagger.json', (req, res) => {
    res.json(document);
  });

  // NÃO configure o SwaggerUI - remova completamente esta linha
  // SwaggerModule.setup('api', app, document);

  // Em ambiente serverless, não precisamos do listen
  if (process.env.NODE_ENV !== 'production') {
    const port = process.env.PORT || 3000;
    await app.listen(port, '0.0.0.0');
    console.log(`Application is running on port: ${port}`);
  }

  return app;
}

export default bootstrap();
