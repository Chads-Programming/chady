export interface PrepareMainCodeArgs {
  baseCode: string;
  mainFunctionName: string;
  testCases: unknown[];
}

export interface CodeExecutionStrategy {
  prepareMainCode(args: PrepareMainCodeArgs): string;
  execute(preparedCode: string): Promise<string[]>;
}
