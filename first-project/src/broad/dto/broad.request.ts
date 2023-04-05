import { Broad } from '../entities/broad.entity';
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class BroadSaveRequest {
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

@InputType()
export class BroadUpdateRequest {
  @Field(() => String)
  title: string;
  @Field(() => String)
  content: string;
}
