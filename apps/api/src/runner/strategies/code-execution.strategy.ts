import { ExecutionInput, RunnerOutput } from '../types';

export interface PrepareMainCodeArgs {
  baseCode: string;
  mainFunctionName: string;
}

export interface ExecuteCodeArgs {
  mainCode: string;
  inputs: ExecutionInput[];
}

export interface ExecutionArgs {
  mainCodeArgs: PrepareMainCodeArgs;
  inputs: ExecutionInput[];
}

export interface CodeExecutionStrategy {
  prepareMainCode(args: PrepareMainCodeArgs): string;
  execute(args: ExecuteCodeArgs): Promise<RunnerOutput>;
}
