import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from '@/config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['*', 'https://studio.apollographql.com'],
    credentials: true,
  });

  app.use(cookieParser());

  await app.listen(envs.PORT);
}
bootstrap();
