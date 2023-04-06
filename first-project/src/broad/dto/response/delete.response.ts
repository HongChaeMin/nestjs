import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BroadDeleteResponse {
  constructor(message: string) {
    this.message = message;
  }
  @Field(() => String)
  message: string;
}
