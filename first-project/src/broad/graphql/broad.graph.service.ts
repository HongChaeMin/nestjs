import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Broad } from '../entities/broad.entity';
import { BroadGraphRequest } from './broad.dto';

@Injectable()
export class BroadGraphService {
  constructor(
    @InjectRepository(Broad)
    private broadRepository: Repository<Broad>,
  ) {}

  async getBroads() {
    return await this.broadRepository.find();
  }

  async saveBroad(request: BroadGraphRequest) {
    return this.broadRepository.save(request.toEntity());
  }

}
