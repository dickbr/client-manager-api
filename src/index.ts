/* eslint-disable @typescript-eslint/quotes */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify';
import 'dotenv/config';
import { AppModule } from './app.module';
import { DataSource } from '@database/postgres';


async function bootstrap(): Promise<void> {
  await new DataSource().datasourceConnection()
  const app = await initializeApp();
  const version = process.env.npm_package_version as string;
  await initializeAPI(app, version);
}

async function initializeApp() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  app.enableCors({ allowedHeaders: '*', exposedHeaders: '*' });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true }
    })
  );

  return app;
}

async function initializeAPI(app: NestFastifyApplication, version: string) {
  const port = process.env.PORT ?? 3000;
  await app.listen(port, '0.0.0.0').then(() => {
    console.log(`client-manager-api v${version} | started on port ${port}`);
  });
}

bootstrap().catch((err) => {
  console.error(err);
  process.exit(1);
});
