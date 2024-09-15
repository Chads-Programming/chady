import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from '@/config';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000', 'https://studio.apollographql.com'],
    credentials: true,
  });

  app.use(cookieParser());

  await app.listen(envs.PORT);
}
bootstrap();
