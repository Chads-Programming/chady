import { PrismaService } from '@/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma, ProgrammingLang } from '@prisma/client';
import { CreateCodeChallengeInput } from '../dtos/code-challenge.input';
import { SeachChallengeArgs } from '../dtos/search-challenge.args';
import { CreateTestCaseInput } from '../dtos/test-case.input';

@Injectable()
export class ChallengeService {
  constructor(private readonly prisma: PrismaService) {}

  createChallenge(codeChallengeDto: CreateCodeChallengeInput) {
    return this.prisma.codeChallenge.create({
      data: codeChallengeDto,
    });
  }

  softDeleteChallenge(id: string) {
    return this.prisma.codeChallenge.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  async findCodeChallengeTestCases(codeChallengeId: string) {
    return this.prisma.testCase.findMany({
      where: {
        codeChallengeId,
      },
    });
  }

  async findCodeChallengeById(id: string) {
    return this.prisma.codeChallenge.findFirst({
      where: {
        id,
      },
    });
  }

  async findChallengeLangDetailByChallengeId(
    id: string,
    lang: ProgrammingLang,
  ) {
    return this.prisma.codeChallengeLangDetail.findFirst({
      where: {
        codeChallengeId: id,
        lang,
        deletedAt: null,
      },
    });
  }

  async findChallenges(searchArgs: SeachChallengeArgs) {
    const { search, lang, page = 1, perPage = 10, difficult } = searchArgs;
    const query: Prisma.CodeChallengeWhereInput = {
      deletedAt: null,
    };

    if (lang) {
      query.codeChallengeLangDetails = {
        some: {
          lang,
        },
      };
    }

    if (difficult) {
      query.difficult = difficult;
    }

    if (search) {
      query.OR = [
        {
          title: { contains: search, mode: 'insensitive' },
        },
        {
          description: { contains: search, mode: 'insensitive' },
        },
      ];
    }

    const dataQuery = this.prisma.codeChallenge.findMany({
      where: query,
      take: perPage,
      skip: (page - 1) * perPage,
    });

    const countQuery = this.prisma.codeChallenge.count({
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

  async createTestCase(createTestCaseDto: CreateTestCaseInput) {
    return this.prisma.testCase.create({
      data: {
        args: createTestCaseDto.args,
        isSecret: createTestCaseDto.isSecret,
        expectedOutput: createTestCaseDto.expectedOutput,
        codeChallengeId: createTestCaseDto.codeChallengeId,
      },
    });
  }

  async findTestCases(codeChallengeId: string) {
    return this.prisma.testCase.findMany({
      where: {
        codeChallengeId,
        deletedAt: null,
      },
    });
  }

  async findLangDetailsByChallengeId(codeChallengeId: string) {
    return this.prisma.codeChallengeLangDetail.findMany({
      where: {
        codeChallengeId,
      },
    });
  }

  async softDeleteTestCase(testCaseId: number) {
    return this.prisma.testCase.update({
      where: {
        id: testCaseId,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
