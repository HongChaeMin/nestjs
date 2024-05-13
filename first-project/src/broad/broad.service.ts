import { Injectable } from '@nestjs/common';
import { Broad } from './entities/broad.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BroadSaveRequest } from './dto/request/save.request';
import { BroadUpdateRequest } from './dto/request/update.request';
import { BroadDeleteResponse } from './dto/response/delete.response';

@Injectable()
export class BroadService {
  constructor(
    @InjectRepository(Broad)
    private broadRepository: Repository<Broad>,
  ) {}

  async createBroad(request: BroadSaveRequest) {
    const saveBroad = request.toEntity();
    const resultBroad = await this.broadRepository.save(saveBroad);
    return resultBroad.toResponse();
  }

  async getBroads() {
    const broads = await this.broadRepository.find();
    return broads.map((broad) => broad.toResponse());
  }

  async getOneBroad(broadId: number) {
    const broad = await this.broadRepository.findOneBy({ id: broadId });
    return broad.toResponse();
  }

  async updateBroad(broadId: number, broad: BroadUpdateRequest) {
    await this.broadRepository.update(
      { id: broadId },
      { title: broad.title, content: broad.content },
    );
    const updateBroad = await this.broadRepository.findOneBy({ id: broadId });
    return updateBroad.toResponse();
  }

  async deleteBroad(broadId: number) {
    await this.broadRepository.delete({ id: broadId });
    return new BroadDeleteResponse('success delete.');
  }

}
