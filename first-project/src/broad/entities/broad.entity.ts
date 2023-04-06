import { BaseEntity } from '../../common/entities/base.entity';
import { Column, Entity } from 'typeorm';
import { BroadResponse } from '../dto/response/response';

@Entity()
export class Broad extends BaseEntity {

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  content: string;

  @Column({ nullable: false })
  writer: string;

  toResponse() {
    return new BroadResponse(
      this.id,
      this.title,
      this.content,
      this.writer,
      this.createdAt,
      this.updatedAt,
    );
  }
}
