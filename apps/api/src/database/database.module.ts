import { SeedController } from '@/database/seed.controller';
import { SeederService } from '@/database/seeder.service';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [SeedController],
  providers: [PrismaService, SeederService],
  exports: [PrismaService, SeederService],
})
export class DatabaseModule {}
