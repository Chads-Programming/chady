import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from '@/config';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['*', 'https://studio.apollographql.com'],
    credentials: true,
  });
  app.use(
    session({
      cookie: {
        httpOnly: true,
        maxAge: 86400000,
        secure: false,
        sameSite: 'lax',
      },
      secret: envs.COOKIE_SECRET,
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(envs.PORT);
}
bootstrap();
