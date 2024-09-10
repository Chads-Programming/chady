import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CodeExecuteBody, RunnerOutput } from './types';
import { envs } from '@/config';

@Injectable()
export class RunnerService {
  constructor(private readonly http: HttpService) {}

  async runCode(codeBody: CodeExecuteBody): Promise<RunnerOutput> {
    const url = `${envs.CODE_RUNNER_API_HOST}/execute-code`;

    const request$ = this.http.post<RunnerOutput>(url, {
      ...codeBody,
      main_code: codeBody.mainCode,
    });
    const result = await firstValueFrom(request$);

    return result.data;
  }
}