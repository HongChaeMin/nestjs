import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BroadGraphService } from './broad.graph.service';
import { BroadGraphRequest, BroadGraphResponse } from './broad.dto';

@Resolver()
export class BroadResolver {
  constructor(
    private readonly broadGraphService: BroadGraphService,
  ) {}

  @Query(() => [BroadGraphResponse])
  async getBroads() {
    return await this.broadGraphService.getBroads();
  }

  @Mutation(() => BroadGraphResponse)
  async saveBroad(@Args('broad') request: BroadGraphRequest) {
    return await this.broadGraphService.saveBroad(request);
  }
}
