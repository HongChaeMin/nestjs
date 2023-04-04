import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Broad } from '../entities/broad.entity';

@InputType()
export class BroadGraphRequest {
  @Field(() => String)
  title: string;
  @Field(() => String)
  content: string;
  @Field(() => String)
  writer: string;

  toEntity() {
    const broad = new Broad();
    broad.title = this.title;
    broad.content = this.content;
    broad.writer = this.writer;
    return broad;
  }
}

@ObjectType()
export class BroadGraphResponse {
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
