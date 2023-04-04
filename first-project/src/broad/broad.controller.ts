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
import { BroadSaveRequest, BroadUpdateRequest } from "./dto/broad.request";
import { BusinessException } from "../common/exception/business.exception";
import { ErrorCode } from "../common/exception/error.code";
import { ApiResponse } from "../common/exception/api.response";

@Controller('/broads')
export class BroadController {
  constructor(private readonly broadService: BroadService) {}

  @Get()
  async getBroads() {
    const result = await this.broadService.getBroads();
    return ApiResponse.SUCCESS(result);
  }

  @Get('/error')
  getError() {
    throw new BusinessException(ErrorCode.SERVER_ERROR);
  }

  @Get('/:broadId')
  async getOneBroad(@Param('broadId') broadId: number) {
    const result = await this.broadService.getOneBroad(broadId);
    return ApiResponse.SUCCESS(result);
  }

  @Post()
  async createBroad(@Body() broad: BroadSaveRequest) {
    const result = await this.broadService.createBroad(broad);
    return ApiResponse.SUCCESS(result);
  }

  @Patch('/:broadId')
  async updateBroad(@Param('broadId') broadId: number, @Body() broad: BroadUpdateRequest) {
    const result = await this.broadService.updateBroad(broadId, broad);
    return ApiResponse.SUCCESS(result);
  }

  @Delete('/:broadId')
  async deleteBroad(@Param('broadId') broadId: number) {
    const result = await this.broadService.deleteBroad(broadId);
    return ApiResponse.SUCCESS(result);
  }
}
