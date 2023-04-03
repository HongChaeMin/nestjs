import {
  Body,
  Controller,
  Delete,
  Get, HttpException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BroadService } from './broad.service';
import { BroadDeleteResponse, BroadResponse } from './dto/broad.response';
import { BroadSaveRequest, BroadUpdateRequest } from "./dto/broad.request";
import { BusinessException } from "../common/exception/business.exception";
import { ErrorCode } from "../common/exception/error.code";

@Controller('/broads')
export class BroadController {
  constructor(private readonly broadService: BroadService) {}

  @Get()
  async getBroads(): Promise<BroadResponse[]> {
    return await this.broadService.getBroads();
  }

  @Get('/error')
  getError() {
    throw new BusinessException(ErrorCode.SERVER_ERROR);
  }

  @Get('/:broadId')
  async getOneBroad(@Param('broadId') broadId: number): Promise<BroadResponse> {
    return await this.broadService.getOneBroad(broadId);
  }

  @Post()
  async createBroad(@Body() broad: BroadSaveRequest): Promise<BroadResponse> {
    return await this.broadService.createBroad(broad);
  }

  @Patch('/:broadId')
  async updateBroad(@Param('broadId') broadId: number, @Body() broad: BroadUpdateRequest): Promise<BroadResponse> {
    return await this.broadService.updateBroad(broadId, broad);
  }

  @Delete('/:broadId')
  async deleteBroad(@Param('broadId') broadId: number): Promise<BroadDeleteResponse> {
    return await this.broadService.deleteBroad(broadId);
  }
}
