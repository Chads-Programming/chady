import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { RoleService } from './services/role.service';
import { DatabaseModule } from '@/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [UserService, RoleService],
  exports: [UserService, RoleService],
})
export class UsersModule {}
