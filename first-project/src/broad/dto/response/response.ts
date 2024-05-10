import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
export class BroadResponse {
  constructor(
    id: number,
    title: string,
    content: string,
    writer: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.writer = writer;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  @ApiProperty({
    type: String,
    description: '게시만 아이디',
    example: 1,
  })
  @Field(() => Number)
  id: number;

  @Field(() => String)
  title: string;
  @Field(() => String)
  content: string;
  @Field(() => String)
  writer: string;
  @Field(() => Date)
  createdAt: Date;
  @Field(() => Date)
  updatedAt: Date;
}
