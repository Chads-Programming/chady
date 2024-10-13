import { ObjectType, OmitType } from '@nestjs/graphql';
import { Submission } from './submission.model';

@ObjectType()
export class RegisteredSubmission extends OmitType(Submission, [
  'user',
  'codeChallenge',
] as const) {}
