import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

// Create an express server instance
const expressApp = express();

// A function to create the NestJS application
async function bootstrap(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp), { cors: true });
  await app.init()

  app.enableCors({
    origin: [
      'https://nest-ecomm-nq1i.vercel.app/',
    ], // Allowed origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed methods
    credentials: true, // If you need to send cookies/credentials
  });

  return app
  
}

// Bootstrap the app and export the express server as the default export
// The serverless platform expects a function or a server instance to be exported
export default async function (req, res) {
  await bootstrap(); // Initialize NestJS
  expressApp(req, res); // Handle the request using the underlying express app
}

export const server = bootstrap();
