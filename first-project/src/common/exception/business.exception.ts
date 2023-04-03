import { ErrorCode } from './error.code';

export class BusinessException extends Error {

  errorCode: ErrorCode;

  constructor(errorCode: ErrorCode) {
    super();
    this.errorCode = errorCode;
  }
}
