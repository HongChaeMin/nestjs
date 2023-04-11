import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserUpdateRequest {
  @Field(() => String)
  name: string;
  @Field(() => String)
  email: string;
  @Field(() => String)
  phone: string;
}
