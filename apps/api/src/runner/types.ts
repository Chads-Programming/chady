export enum LangEnum {
  Javascript = 'Javascript',
  Python = 'Python',
  Rust = 'Rust',
}

export interface RunnerOutput {
  is_success: boolean;
  message: string;
  results: RunnerInputResult[];
}

export interface RunnerInputResult {
  input: Input;
  output: string;
  execution_time: number;
  time_format: string;
}

export interface Input {
  id: string;
  args: string;
}

export interface CodeExecuteBody {
  lang: LangEnum;
  mainCode: string;
  inputs: ExecutionInput[];
}

export interface ExecutionInput {
  id: string;
  args: string;
}
