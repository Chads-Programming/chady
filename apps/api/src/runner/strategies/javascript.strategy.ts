import { Injectable } from '@nestjs/common';
import { RunnerService } from '../runner.service';
import { LangEnum, RunnerOutput } from '../types';
import {
  CodeExecutionStrategy,
  ExecuteCodeArgs,
  PrepareMainCodeArgs,
} from './code-execution.strategy';

@Injectable()
export class JavascriptExecutionStrategy implements CodeExecutionStrategy {
  constructor(private readonly runner: RunnerService) {}

  prepareMainCode(args: PrepareMainCodeArgs): string {
    const { baseCode, solutionCode } = args;

    return `${solutionCode}\n${baseCode}`;
  }

  execute({ inputs, mainCode }: ExecuteCodeArgs): Promise<RunnerOutput> {
    return this.runner.runCode({
      lang: LangEnum.Javascript,
      mainCode,
      inputs,
    });
  }
}
