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
  id: number;
  title: string;
  content: string;
  writer: string;
  createdAt: Date;
  updatedAt: Date;
}

export class BroadDeleteResponse {
  constructor(message: string) {
    this.message = message;
  }
  message: string;
}
