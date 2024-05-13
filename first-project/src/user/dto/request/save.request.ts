import { User } from '../../entities/user.entity';
import { hash } from '../../../common/encode/password.encode';
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UserSaveRequest {
  @IsNotEmpty()
  @Field(() => String)
  account: string;
  @IsNotEmpty()
  @Field(() => String)
  password: string;
  @IsNotEmpty()
  @Field(() => String)
  name: string;
  @IsNotEmpty()
  @Field(() => String)
  email: string;
  @IsNotEmpty()
  @Field(() => String)
  phone: string;

  async toEntity() {
    const user = new User();
    user.account = this.account;
    user.password = await hash(this.password);
    user.name = this.name;
    user.email = this.email;
    user.phone = this.phone;
    return user;
  }
}
