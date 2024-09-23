import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { RunnerService } from './runner.service';
import { JavascriptExecutionStrategy } from './strategies/javascript.strategy';
import { PythonExecutionStrategy } from './strategies/python.strategy';

@Module({
  imports: [HttpModule],
  providers: [
    RunnerService,
    JavascriptExecutionStrategy,
    PythonExecutionStrategy,
  ],
  exports: [JavascriptExecutionStrategy, PythonExecutionStrategy],
})
export class RunnerModule {}
