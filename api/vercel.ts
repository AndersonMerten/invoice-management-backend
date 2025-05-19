import { NestFactory } from '@nestjs/core';
import type { Handler, HandlerContext, HandlerEvent } from '@netlify/functions';
import { AppModule } from '../src/app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.init();
  return app;
};

// Cache da instância do NestJS
let cachedApp: any;

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext,
) => {
  if (!cachedApp) {
    cachedApp = await bootstrap();
  }

  const expressApp = cachedApp.getHttpAdapter().getInstance();

  return new Promise((resolve) => {
    expressApp(event, context, (err: any, result: any) => {
      if (err) {
        resolve({
          statusCode: 500,
          body: JSON.stringify({ error: err.message }),
        });
        return;
      }
      resolve(
        result || {
          statusCode: 200,
          body: JSON.stringify({ message: 'Success' }),
        },
      );
    });
  });
};

// Exporta o handler como default export
export default handler;
