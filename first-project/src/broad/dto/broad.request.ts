import { Broad } from '../entities/broad.entity';

export class BroadSaveRequest {
  title: string;
  content: string;
  writer: string;

  toEntity() {
    const broad = new Broad();
    broad.title = this.title;
    broad.content = this.content;
    broad.writer = this.writer;
    return broad;
  }
}

export class BroadUpdateRequest {
  title: string;
  content: string;
}
