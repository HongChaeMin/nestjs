import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { UserSaveRequest, UserSignInRequest, UserUpdateRequest } from './dto/user.request';
import { UserService } from './user.service';
import { ApiResponse } from '../common/exception/api.response';
import { AuthGuard } from '../common/auth/auth.guard';

@Controller('/users')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @UseGuards(AuthGuard)
  @Get('/:userId')
  async getUser(@Param('userId') id: number) {
    const result = await this.userService.findUser(id);
    return ApiResponse.SUCCESS(result);
  }

  @Post()
  async createUser(@Body() request: UserSaveRequest) {
    const result = await this.userService.create(request);
    return ApiResponse.SUCCESS(result);
  }

  @Post('/sign-in')
  async signIn(@Body() request: UserSignInRequest) {
    const result = await this.userService.signIn(request);
    return ApiResponse.SUCCESS(result);
  }

  @Patch('/:userId')
  async updateUser(@Param('userId') id: number, @Body() request: UserUpdateRequest) {
    const result = await this.userService.updateUser(id, request);
    return ApiResponse.SUCCESS(result);
  }

  @Delete('/:userId')
  async deleteUser(@Param('userId') id: number) {
    const result = await this.userService.deleteUser(id);
    return ApiResponse.SUCCESS(result);
  }

}
