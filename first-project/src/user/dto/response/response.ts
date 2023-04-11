import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserResponse {
  constructor(
    id: number,
    account: string,
    name: string,
    email: string,
    phone: string,
    role: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.account = account;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.role = role;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  @Field(() => Number)
  id: number;
  @Field(() => String)
  account: string;
  @Field(() => String)
  name: string;
  @Field(() => String)
  email: string;
  @Field(() => String)
  phone: string;
  @Field(() => String)
  role: string;
  @Field(() => Date)
  createdAt: Date;
  @Field(() => Date)
  updatedAt: Date;

}
