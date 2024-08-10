import { PrismaService } from '@/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma, Status, User } from '@prisma/client';
import { RegisterEventInput } from '../dtos/register-event.input';
import { UpdateEventInput } from '../dtos/event.input';
import { EventArgs } from '../dtos/event.args';

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}

  registerEvent(registerEventInput: RegisterEventInput) {
    const { event, schedule, creators } = registerEventInput;
    return this.prisma.$transaction(async (tx) => {
      // create event with schedule
      const newEvent = await tx.event.create({
        data: {
          name: event.name,
          description: event.description,
          type: event.type,
          link: event.link,
          status: Status.PENDING,
          schedule: {
            create: schedule,
          },
        },
      });
      // create event creators
      for (const creatorId of creators) {
        await tx.eventCreators.create({
          data: {
            eventId: newEvent.id,
            userId: creatorId,
          },
        });
      }

      return newEvent;
    });
  }

  updateEvent(updateEventInput: UpdateEventInput) {
    return this.prisma.event.update({
      where: {
        id: updateEventInput.id,
      },
      data: updateEventInput,
    });
  }

  async findAll(eventArgs: EventArgs) {
    const { search, status, page = 1, perPage = 10 } = eventArgs;
    const query: Prisma.EventWhereInput = {};

    if (status) {
      query.status = status;
    }

    if (search) {
      query.OR = [
        {
          name: { contains: search, mode: 'insensitive' },
        },
        {
          description: { contains: search, mode: 'insensitive' },
        },
      ];
    }

    const dataQuery = this.prisma.event.findMany({
      where: query,
      take: perPage,
      skip: (page - 1) * perPage,
      include: {
        schedule: true,
      },
    });

    const countQuery = this.prisma.event.count({
      where: query,
    });

    const [data, count] = await Promise.all([dataQuery, countQuery]);
    const totalPages = Math.ceil(count / perPage);

    return {
      data,
      totalPages,
      currentPage: page,
      hasNextPage: page < totalPages,
      total: count,
    };
  }

  async findCreators(eventId: string): Promise<User[]> {
    const creators = await this.prisma.eventCreators.findMany({
      where: {
        eventId,
      },
      include: {
        user: true,
      },
    });

    return creators.map(({ user }) => user);
  }
}
