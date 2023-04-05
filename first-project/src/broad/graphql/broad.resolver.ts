import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BroadResponse } from '../dto/broad.response';
import { BroadService } from '../broad.service';
import { BroadSaveRequest, BroadUpdateRequest } from '../dto/broad.request';

@Resolver()
export class BroadResolver {
  constructor(
    private readonly broadService: BroadService,
  ) {}

  @Query(() => [BroadResponse])
  async getBroads() {
    return await this.broadService.getBroads();
  }

  @Mutation(() => BroadResponse)
  async saveBroad(@Args('broad') request: BroadSaveRequest) {
    return await this.broadService.createBroad(request);
  }

  @Mutation(() => BroadResponse)
  async updateBroad(@Args('broadId') broadId: number, @Args('broad') request: BroadUpdateRequest) {
    return await this.broadService.updateBroad(broadId, request);
  }

}
