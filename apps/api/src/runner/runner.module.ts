import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { RunnerService } from './runner.service';
import { JavascriptExecutionStrategy } from './strategies/javascript.strategy';

@Module({
  imports: [HttpModule],
  providers: [RunnerService, JavascriptExecutionStrategy],
  exports: [JavascriptExecutionStrategy],
})
export class RunnerModule {}
