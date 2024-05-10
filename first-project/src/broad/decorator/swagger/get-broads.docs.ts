import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { BroadResponse } from 'src/broad/dto/response/response';

export function GetBroadsDocs(): MethodDecorator {
  return (target: string, key: string, descriptor: any) => {
    ApiOperation({
      summary: '게시물 조회',
      description: '게시물들을 조회합니다.',
    })(target, key, descriptor) as MethodDecorator;

    ApiOkResponse({
      description: '게시물 조회 성공',
      type: BroadResponse,
    })(target, key, descriptor) as MethodDecorator;
  };
}
