import { PrismaService } from '@/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { UpdateEventScheduleInput } from '../dtos/schedule.input';

@Injectable()
export class ScheduleService {
  constructor(private readonly prisma: PrismaService) {}

  updateSchedule(id: number, updateScheduleInput: UpdateEventScheduleInput) {
    return this.prisma.eventSchedule.update({
      where: {
        id,
      },
      data: updateScheduleInput,
    });
  }
}
