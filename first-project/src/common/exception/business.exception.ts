import { ErrorCode } from './error.code';
import { HttpException } from "@nestjs/common";

export class BusinessException extends HttpException {

  errorCode: ErrorCode;

  constructor(errorCode: ErrorCode) {
    super(errorCode.message, errorCode.code);
    this.errorCode = errorCode;
  }

  toResponse(requestUrl: string) {
    return {
      message: this.errorCode.message,
      code: this.errorCode.code,
      requestUrl: requestUrl,
      timestamp: new Date().toISOString()
    };
  }
}
