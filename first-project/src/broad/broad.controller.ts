import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BroadService } from './broad.service';
import { BroadUpdateRequest } from './dto/request/update.request';
import { BroadSaveRequest } from './dto/request/save.request';
import { GetBroadsDocs, GetErrorDocs } from './decorator/swagger';
import { ApiTags } from '@nestjs/swagger';
import { TypeORMError } from 'typeorm';

@ApiTags('broad')
@Controller('/broads')
export class BroadController {
  constructor(private readonly broadService: BroadService) {}

  @GetBroadsDocs()
  @Get()
  async getBroads() {
    return await this.broadService.getBroads();
  }

  @GetErrorDocs()
  @Get('/error')
  getError() {
    throw new TypeORMError('TypeORM Error');
  }

  @Get('/:broadId')
  async getOneBroad(@Param('broadId') broadId: number) {
    return await this.broadService.getOneBroad(broadId);
  }

  @Post()
  async createBroad(@Body() broad: BroadSaveRequest) {
    return await this.broadService.createBroad(broad);
  }

  @Patch('/:broadId')
  async updateBroad(
    @Param('broadId') broadId: number,
    @Body() broad: BroadUpdateRequest,
  ) {
    return await this.broadService.updateBroad(broadId, broad);
  }

  @Delete('/:broadId')
  async deleteBroad(@Param('broadId') broadId: number) {
    return await this.broadService.deleteBroad(broadId);
  }
}
