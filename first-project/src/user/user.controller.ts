import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserSaveRequest } from './dto/request/save.request';
import { UserSignInRequest } from './dto/request/sign.in.request';
import { UserUpdateRequest } from './dto/request/update.request';
import { AuthGuard } from '@nestjs/passport';
import { UserGuard } from '../common/auth/user.guard';
import { UserId } from '../common/auth/user.param';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getUser(@UserId() id: number) {
    return await this.userService.findUser(id);
  }

  @Post()
  async createUser(@Body() request: UserSaveRequest) {
    return await this.userService.create(request);
  }

  @Post('/sign-in')
  async signIn(@Body() request: UserSignInRequest) {
    return await this.userService.signIn(request);
  }

  @UseGuards(UserGuard)
  @Patch('/:userId')
  async updateUser(
    @Param('userId') id: number,
    @Body() request: UserUpdateRequest,
  ) {
    return await this.userService.updateUser(id, request);
  }

  @Delete('/:userId')
  async deleteUser(@Param('userId') id: number) {
    return await this.userService.deleteUser(id);
  }
}
