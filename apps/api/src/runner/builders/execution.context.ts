import { Injectable } from '@nestjs/common';
import {
  CodeExecutionStrategy,
  PrepareMainCodeArgs,
} from './code-execution.strategy';

@Injectable()
export class ExectutionContext {
  private codeExecutionStrategy: CodeExecutionStrategy;
  setStrategy(strategy: CodeExecutionStrategy) {
    this.codeExecutionStrategy = strategy;
  }

  executeCode(executionArgs: PrepareMainCodeArgs) {
    const preparedCode =
      this.codeExecutionStrategy.prepareMainCode(executionArgs);

    return this.codeExecutionStrategy.execute(preparedCode);
  }
}
