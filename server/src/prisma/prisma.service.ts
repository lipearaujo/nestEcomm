import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient {
  // The constructor is where you can pass options to the underlying PrismaClient
  // or use driver adapters if needed (e.g., for serverless environments).
  constructor() {

    super();
  }

  async onModuleInit() {
    // Connect to the database when the module initializes
    await this.$connect();
  }
}
