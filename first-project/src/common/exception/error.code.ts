import { HttpStatus } from "@nestjs/common";

export class ErrorCode {

  message: string;
  code: HttpStatus;

  constructor(message: string, code: HttpStatus) {
    this.message = message;
    this.code = code;
  }

  static readonly SERVER_ERROR = new ErrorCode('서버에 문제가 발생했습니다. 잠시후 다시 시도해주세요.', HttpStatus.INTERNAL_SERVER_ERROR);
}
