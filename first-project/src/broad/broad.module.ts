import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BroadController } from './broad.controller';
import { BroadService } from './broad.service';
import { Broad } from './entities/broad.entity';
import { BroadResolver } from "./graphql/broad.resolver";
import { BroadGraphService } from './graphql/broad.graph.service';

@Module({
  imports: [TypeOrmModule.forFeature([Broad])],
  controllers: [BroadController],
  providers: [BroadService, BroadGraphService, BroadResolver],
})
export class BroadModule {}
