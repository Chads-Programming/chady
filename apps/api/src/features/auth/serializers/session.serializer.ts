import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

type Done = (err: Error, user: User) => void;

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor() {
    super();
  }

  serializeUser(user: User, done: Done) {
    console.log('ser:', user);

    done(null, user);
  }

  deserializeUser(user: User, done: Done) {
    console.log('se:', user);
    return done(null, user);
  }
}
