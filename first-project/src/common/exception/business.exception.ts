import { ErrorCode } from './error.code';
import { HttpException } from "@nestjs/common";
import { ApiResponse } from "./api.response";

export class BusinessException extends HttpException {

  errorCode: ErrorCode;

  constructor(errorCode: ErrorCode) {
    super(errorCode.message, errorCode.code);
    this.errorCode = errorCode;
  }

  toResponse(requestUrl: string) {
    return ApiResponse.ERROR(this.errorCode, {
      requestUrl: requestUrl,
      timestamp: new Date().toISOString()
    });
  }
}
