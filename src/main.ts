import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvironmentVariableInterface } from './interfaces/config/environment-variable-interface/environment-variable-interface.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.set('query parser', 'extended'); // rich query

  const port = new ConfigService<EnvironmentVariableInterface>()?.get(
    'PORT',
    3001,
    { infer: true },
  );

  await app.listen(port);
}

bootstrap();
