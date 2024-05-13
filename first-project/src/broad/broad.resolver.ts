import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BroadService } from './broad.service';
import { BroadSaveRequest } from './dto/request/save.request';
import { BroadUpdateRequest } from './dto/request/update.request';
import { BroadResponse } from './dto/response/response';

@Resolver()
export class BroadResolver {
  constructor(private readonly broadService: BroadService) {}

  @Query(() => [BroadResponse])
  async getBroads() {
    return await this.broadService.getBroads();
  }

  @Query(() => BroadResponse)
  async getOneBroad(@Args('broadId') broadId: number) {
    return await this.broadService.getOneBroad(broadId);
  }

  @Mutation(() => BroadResponse)
  async saveBroad(@Args('broad') request: BroadSaveRequest) {
    return await this.broadService.createBroad(request);
  }

  @Mutation(() => BroadResponse)
  async updateBroad(
    @Args('broadId') broadId: number,
    @Args('broad') request: BroadUpdateRequest,
  ) {
    return await this.broadService.updateBroad(broadId, request);
  }
}
