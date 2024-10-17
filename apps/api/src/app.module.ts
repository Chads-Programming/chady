import { join } from 'node:path';
import { AuthModule } from '@/auth/auth.module';
import { ChallengesModule } from '@/challenges/challenges.module';
import { DiscordModule } from '@/discord/discord.module';
import { EventsModule } from '@/events/events.module';
import { UsersModule } from '@/users/users.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

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
