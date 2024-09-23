import { envs } from '@/config';
import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: envs.ALLOWED_ORIGIN_HOSTS.split(','),
    credentials: true,
  });

  app.use(cookieParser());

  await app.listen(envs.PORT);
}
bootstrap();
