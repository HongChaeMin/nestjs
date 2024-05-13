import { BusinessExceptionType, ValidateExceptionType } from './type';
import { HttpException } from '@nestjs/common';

export class FirstException extends HttpException {
  constructor(errors: BusinessExceptionType[] | ValidateExceptionType[]) {
    super({ errors }, errors[0].httpStatus);
  }

  private errors: BusinessExceptionType[] | ValidateExceptionType[];
}
