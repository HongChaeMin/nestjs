import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiResponse } from '../common/exception/api.response';
import { UserSaveRequest } from './dto/request/save.request';
import { UserSignInRequest } from './dto/request/sign.in.request';
import { UserUpdateRequest } from './dto/request/update.request';
import { IdPipe } from "../common/pipes/id.pipe";
import { AuthGuard } from '@nestjs/passport';
import { UserGuard } from '../common/auth/user.guard';
import { UserId } from '../common/auth/user.param';

@Controller('/users')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getUser(@UserId() id: number) {
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

  @UseGuards(UserGuard)
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
