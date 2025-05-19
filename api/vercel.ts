import { NestFactory } from '@nestjs/core';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import { AppModule } from '../src/app.module';

let server: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();
  return app;
}

export const handler = async (event: any, context: any) => {
  if (!server) {
    const app = await bootstrap();
    server = serverlessExpress({ app: app.getHttpAdapter().getInstance() });
  }
  return server(event, context);
};
