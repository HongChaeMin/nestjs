import { Injectable } from '@nestjs/common';
import { Broad } from './models/broad.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BroadSaveRequest, BroadUpdateRequest } from './dto/broad.request';
import { BroadDeleteResponse, BroadResponse } from './dto/broad.response';

@Injectable()
export class BroadService {
  constructor(
    @InjectRepository(Broad)
    private broadRepository: Repository<Broad>,
  ) {}

  async createBroad(request: BroadSaveRequest): Promise<BroadResponse> {
    const saveBroad = request.toEntity();
    const resultBroad = await this.broadRepository.save(saveBroad);
    return resultBroad.toResponse();
  }

  async getBroads(): Promise<BroadResponse[]> {
    const broads = await this.broadRepository.find();
    return broads.map((broad) => broad.toResponse());
  }

  async getOneBroad(broadId: number): Promise<BroadResponse> {
    const broad = await this.broadRepository.findOneBy({ id: broadId });
    return broad.toResponse();
  }

  async updateBroad(broadId: number, broad: BroadUpdateRequest): Promise<BroadResponse> {
    await this.broadRepository.update(
      { id: broadId },
      { title: broad.title, content: broad.content },
    );
    const updateBroad = await this.broadRepository.findOneBy({ id: broadId });
    return updateBroad.toResponse();
  }

  async deleteBroad(broadId: number): Promise<BroadDeleteResponse> {
    await this.broadRepository.delete({ id: broadId });
    return new BroadDeleteResponse('success delete.');
  }

}
