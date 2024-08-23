import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './features/users/users.module';
import { EventsModule } from './features/events/events.module';
import { AuthModule } from './features/auth/auth.module';
import { join } from 'path';
import { DiscordModule } from '@/discord/discord.module';
import { ChallengesModule } from './features/challenges/challenges.module';
import { GraphQLJSON } from 'graphql-type-json';

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
