import { Field, InputType } from "@nestjs/graphql";
import { Broad } from "../../entities/broad.entity";

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
