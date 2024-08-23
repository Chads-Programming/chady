import { Module } from '@nestjs/common';
import { ExectutionContext } from './builders/execution.context';

@Module({
  imports: [],
  providers: [ExectutionContext],
  exports: [],
})
export class RunnerModule {}
