import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BroadController } from './broad.controller';
import { BroadService } from './broad.service';
import { Broad } from './models/broad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Broad])],
  controllers: [BroadController],
  providers: [BroadService],
})
export class BroadModule {}
