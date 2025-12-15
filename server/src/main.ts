import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableCors({
    origin: [
      'https://nest-ecomm-nq1i.vercel.app/',
    ], // Allowed origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed methods
    credentials: true, // If you need to send cookies/credentials
  });

  await app.listen(3001);
}
bootstrap();
