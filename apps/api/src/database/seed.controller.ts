import * as process from 'node:process';
import { SeederService } from '@/database/seeder.service';
import { Controller, Get } from '@nestjs/common';

@Controller('seeder')
export class SeedController {
  constructor(private readonly seederService: SeederService) {}

  @Get('start-seeding')
  async seedDatabase() {
    if (process.env.NODE_ENV === 'production') {
      return {
        ok: false,
      };
    }

    await this.seederService.seedDatabase();

    return {
      ok: true,
    };
  }
}
