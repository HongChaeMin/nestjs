import { Module } from '@nestjs/common';
import { BroadModule } from './broad/broad.module';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './common/database/configuration';

@Module({
  imports: [BroadModule, TypeOrmModule.forRoot(configuration)],
  controllers: [AppController],
})
export class AppModule {}
