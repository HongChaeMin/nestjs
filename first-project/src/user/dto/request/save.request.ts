import { User } from '../../entities/user.entity';
import { hash } from '../../../common/encode/password.encode';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserSaveRequest {

  @Field(() => String)
  account: string;
  @Field(() => String)
  password: string;
  @Field(() => String)
  name: string;
  @Field(() => String)
  email: string;
  @Field(() => String)
  phone: string;

  async toEntity() {
    const user = new User();
    user.account = this.account;
    user.password = await hash(this.password)
    user.name = this.name;
    user.email = this.email;
    user.phone = this.phone;
    return user;
  }
}
