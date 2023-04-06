import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BroadUpdateRequest {
  @Field(() => String)
  title: string;
  @Field(() => String)
  content: string;
}
