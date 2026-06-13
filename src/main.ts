import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { EnvironmentVariables } from './environment-variables/interfaces/environment-variables/environment-variables.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.set('query parser', 'extended'); // rich query

  const port = new ConfigService<EnvironmentVariables>()?.get('PORT', 3001, {
    infer: true,
  });

  await app.listen(port);
}

bootstrap();
