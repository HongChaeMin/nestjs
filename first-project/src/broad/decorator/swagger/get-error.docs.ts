import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { BusinessException } from 'src/common/exception/business.exception';

export function GetErrorDocs(): MethodDecorator {
  return (target: string, key: string, descriptor: any) => {
    ApiOperation({
      summary: '에러 반환',
      description: 'SERVER_ERROR를 반환합니다.',
    })(target, key, descriptor) as MethodDecorator;

    ApiOkResponse({
      description: '회원 로그인 성공',
      type: BusinessException,
    })(target, key, descriptor) as MethodDecorator;
  };
}
