import { NestFactory } from '@nestjs/core';
import { EnvLib } from '../lib/lib-env';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(EnvLib?.port);
}

bootstrap();
