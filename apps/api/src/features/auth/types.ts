import { User } from '@prisma/client';

export interface UserDetail extends User {
  roles: string[];
}
