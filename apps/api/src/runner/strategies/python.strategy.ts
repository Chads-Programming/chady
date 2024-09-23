import { Injectable } from '@nestjs/common';
import { RunnerService } from '../runner.service';
import { LangEnum, RunnerOutput } from '../types';
import {
  CodeExecutionStrategy,
  ExecuteCodeArgs,
  PrepareMainCodeArgs,
} from './code-execution.strategy';

const LIBRARY_IMPORTS = 'from write import write';

@Injectable()
export class PythonExecutionStrategy implements CodeExecutionStrategy {
  constructor(private readonly runner: RunnerService) {}

  prepareMainCode(args: PrepareMainCodeArgs): string {
    const { baseCode, solutionCode } = args;

    return `${LIBRARY_IMPORTS}\n${solutionCode}\n${baseCode}`;
  }
  execute({ inputs, mainCode }: ExecuteCodeArgs): Promise<RunnerOutput> {
    return this.runner.runCode({
      lang: LangEnum.Python,
      mainCode,
      inputs,
    });
  }
}
