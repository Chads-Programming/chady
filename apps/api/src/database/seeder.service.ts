import { PrismaService } from '@/database/prisma.service';
import challenges from '@/database/seed-data/challenges';
import { Injectable } from '@nestjs/common';
import { Difficult, ProgrammingLang } from '@prisma/client';

@Injectable()
export class SeederService {
  constructor(private readonly prisma: PrismaService) {}

  async seedDatabase() {
    // code challenges
    for (const challenge of challenges) {
      // create challenge
      const codeChallenge = await this.prisma.codeChallenge.create({
        data: {
          title: challenge.title,
          description: challenge.description,
          difficult: this.difficultMapper(challenge.difficulty),
        },
      });

      // create test cases
      for (const testCase of challenge.test_cases) {
        await this.prisma.testCase.create({
          data: {
            codeChallengeId: codeChallenge.id,
            args: testCase.input,
            expectedOutput: testCase.output.toString(),
            isSecret: 'isSecret' in testCase ? testCase.isSecret : false,
          },
        });
      }

      // create challenge lang details
      for (const langDetail of challenge.langs) {
        await this.prisma.codeChallengeLangDetail.create({
          data: {
            codeChallengeId: codeChallenge.id,
            startedCode: langDetail.code,
            mainCode: langDetail.mainCode,
            lang: this.langMapper(langDetail.lang),
          },
        });
      }
    }
  }

  private difficultMapper(difficult: string): Difficult {
    switch (difficult) {
      case 'easy':
        return Difficult.Easy;
      case 'medium':
        return Difficult.Medium;
      case 'hard':
        return Difficult.Hard;
      default:
        return Difficult.Easy;
    }
  }

  private langMapper(lang: string): ProgrammingLang {
    switch (lang) {
      case 'python':
        return ProgrammingLang.Python;
      case 'javascript':
        return ProgrammingLang.Javascript;
      case 'typescript':
        return ProgrammingLang.Typescript;
      default:
        return ProgrammingLang.Javascript;
    }
  }
}
