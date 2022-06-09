import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersFactory } from './users.factory';
import { HashModule } from '../hash/hash.module';

@Module({
  imports: [DatabaseModule, HashModule],
  controllers: [UsersController],
  providers: [UsersFactory, UsersService],
  exports: [UsersFactory],
})
export class UsersModule {}
