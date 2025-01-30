import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: 'secretKey',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
