import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import environmentVariablesConfig from '../environment-variables/config/environment-variables.config';
import { UsersModule } from '../users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [environmentVariablesConfig],
    }),
    UsersModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
