import { FirstException } from 'src/common/errors/first.exception';
import { HttpStatus } from '@nestjs/common';
import { BusinessExceptionType } from 'src/common/errors/type';

export class UserException {
  static readonly NOT_FOUND = new FirstException([
    {
      code: 'user.find.not_found',
      message: '사용자가 존재하지 않습니다.',
      httpStatus: HttpStatus.OK,
    } as BusinessExceptionType,
  ]);
}
