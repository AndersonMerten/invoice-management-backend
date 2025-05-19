import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as swaggerUi from 'swagger-ui-express';

export function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Invoice Management API')
    .setDescription('API para gerenciamento de faturas')
    .setVersion('1.0')
    .addTag('invoices')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Configuração do Swagger UI
  const swaggerOptions = {
    explorer: true,
    swaggerOptions: {
      persistAuthorization: true,
      docExpansion: 'list',
      filter: true,
      showRequestDuration: true,
    },
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'Invoice Management API Documentation',
  };

  // Configuração do Express
  const expressApp = app.getHttpAdapter().getInstance();
  expressApp.use(
    '/api',
    swaggerUi.serve,
    swaggerUi.setup(document, swaggerOptions),
  );
}
