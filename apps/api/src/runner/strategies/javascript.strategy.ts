import { Injectable } from '@nestjs/common';
import { RunnerService } from '../runner.service';
import {
  CodeExecutionStrategy,
  ExecuteCodeArgs,
  PrepareMainCodeArgs,
} from './code-execution.strategy';
import { LangEnum, RunnerOutput } from '../types';

const LIBRARY_IMPORTS = `const writter = require('./write');`;

@Injectable()
export class JavascriptExecutionStrategy implements CodeExecutionStrategy {
  constructor(private readonly runner: RunnerService) {}

  prepareMainCode(args: PrepareMainCodeArgs): string {
    const { baseCode, solutionCode } = args;

    return `${LIBRARY_IMPORTS}\n${solutionCode}\n${baseCode}`;
  }

  execute({ inputs, mainCode }: ExecuteCodeArgs): Promise<RunnerOutput> {
    return this.runner.runCode({
      lang: LangEnum.Javascript,
      mainCode,
      inputs,
    });
  }
}
