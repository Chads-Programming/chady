import { RunnerService } from '../runner.service';
import { Injectable } from '@nestjs/common';
import {
  CodeExecutionStrategy,
  ExecuteCodeArgs,
  PrepareMainCodeArgs,
} from './code-execution.strategy';
import { LangEnum, RunnerOutput } from '../types';

@Injectable()
export class JavascriptExecutionStrategy implements CodeExecutionStrategy {
  constructor(private readonly runner: RunnerService) {}

  prepareMainCode(args: PrepareMainCodeArgs): string {
    const { baseCode, mainFunctionName } = args;

    return `const writter = require('./write');
    ${baseCode}
    const main = async () => {
      const args = process.argv.slice(2);
      const params = JSON.parse(args);
      await writter.write(() => {
        return ${mainFunctionName}(...params);
      });
    };
    main();`;
  }

  execute({ inputs, mainCode }: ExecuteCodeArgs): Promise<RunnerOutput> {
    return this.runner.runCode({
      lang: LangEnum.Javascript,
      mainCode,
      inputs,
    });
  }
}
