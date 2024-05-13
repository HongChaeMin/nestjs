import { BusinessExceptionType, ValidateExceptionType } from './type';
import { HttpException, HttpStatus } from '@nestjs/common';

export class FirstException extends HttpException {
  constructor(
    errors: BusinessExceptionType[] | ValidateExceptionType[],
    httpStatus?: HttpStatus,
  ) {
    super({ errors }, httpStatus ? httpStatus : HttpStatus.BAD_REQUEST);
  }

  errors: BusinessExceptionType[] | ValidateExceptionType[];
}
