import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { HttpException } from '@nestjs/common';

export function GetErrorDocs(): MethodDecorator {
  return (target: string, key: string, descriptor: any) => {
    ApiOperation({
      summary: '에러 반환',
      description: 'SERVER_ERROR를 반환합니다.',
    })(target, key, descriptor) as MethodDecorator;

    ApiOkResponse({
      description: '에러 반환 성공',
      type: HttpException,
    })(target, key, descriptor) as MethodDecorator;
  };
}
