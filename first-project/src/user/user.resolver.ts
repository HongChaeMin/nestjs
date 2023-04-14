import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserResponse } from './dto/response/response';
import { UserSaveRequest } from './dto/request/save.request';
import { UserUpdateRequest } from './dto/request/update.request';
import { UseGuards } from '@nestjs/common';
import { GqlAuthAccessGuard } from '../common/auth/gql-auth.guard';
import { GqlUserId } from '../common/auth/gql-user.param';

@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Mutation(() => UserResponse)
  async saveUser(@Args('request') request: UserSaveRequest) {
    return await this.userService.create(request);
  }

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => UserResponse)
  async updateUser(@GqlUserId() userId: number, @Args('request') request: UserUpdateRequest) {
    return await this.userService.updateUser(userId, request);
  }

}
