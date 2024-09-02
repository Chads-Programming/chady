import { Injectable } from '@nestjs/common';
import {
  CodeExecutionStrategy,
  ExecutionArgs,
} from './code-execution.strategy';

@Injectable()
export class CodeExecutionContext {
  constructor(private codeExecutionStrategy: CodeExecutionStrategy) {}

  setStrategy(strategy: CodeExecutionStrategy) {
    this.codeExecutionStrategy = strategy;
  }

  executeCode(executionArgs: ExecutionArgs) {
    const { inputs, mainCodeArgs } = executionArgs;

    const preparedCode =
      this.codeExecutionStrategy.prepareMainCode(mainCodeArgs);

    return this.codeExecutionStrategy.execute({
      inputs,
      mainCode: preparedCode,
    });
  }
}
