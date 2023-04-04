import { Module } from '@nestjs/common';
import { BroadModule } from './broad/broad.module';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './common/database/configuration';
import { LoggerModule } from "./common/logging/logger.module";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  imports: [
    BroadModule,
    LoggerModule,
    TypeOrmModule.forRoot(configuration),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    })
  ],
  controllers: [AppController],
})
export class AppModule {}
