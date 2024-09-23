import { join } from 'node:path';
import { DiscordModule } from '@/discord/discord.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './features/auth/auth.module';
import { ChallengesModule } from './features/challenges/challenges.module';
import { EventsModule } from './features/events/events.module';
import { UsersModule } from './features/users/users.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    EventsModule,
    DiscordModule,
    ChallengesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      context: ({ req }) => ({ req }),
      resolvers: { JSON: GraphQLJSON },
      playground: {
        settings: {
          'request.credentials': 'include',
        },
      },
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
