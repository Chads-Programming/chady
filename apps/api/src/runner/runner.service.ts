import { envs } from '@/config';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { CodeExecuteBody, RunnerOutput } from './types';

@Injectable()
export class RunnerService {
  constructor(private readonly http: HttpService) {}

  async runCode(codeBody: CodeExecuteBody): Promise<RunnerOutput> {
    const url = `${envs.CODE_RUNNER_API_HOST}/execute-code`;

    const request$ = this.http.post<RunnerOutput>(url, {
      ...codeBody,
      id: new Date().getTime().toString(),
      main_code: codeBody.mainCode,
    });
    const result = await firstValueFrom(request$);

    return result.data;
  }
}
