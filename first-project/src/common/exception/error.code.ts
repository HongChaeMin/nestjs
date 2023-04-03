export class ErrorCode {

  message: string;
  code: string;

  constructor(message: string, code: string) {
    this.message = message;
    this.code = code;
  }

  toResponse(requestUrl: string) {
    return {
      requestUrl: requestUrl,
      message: this.message,
      code: this.code,
    };
  }

  static readonly BROAD_NOT_FOUND = new ErrorCode('Broad Not Found', 'BROAD_NOT_FOUND');
}
