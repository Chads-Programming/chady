import {
  CodeExecutionStrategy,
  PrepareMainCodeArgs,
} from './code-execution.strategy';

export class JavascriptExecutionStrategy implements CodeExecutionStrategy {
  prepareMainCode(args: PrepareMainCodeArgs): string {
    throw new Error('Method not implemented.');
  }
  execute(mainCode: string): Promise<string[]> {
    throw new Error('Method not implemented.');
  }
}
