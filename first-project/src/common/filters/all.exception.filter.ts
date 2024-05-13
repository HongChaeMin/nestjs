import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { FirstException } from 'src/common/errors/first.exception';
import * as process from 'node:process';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private exception: HttpException;
  private isFirstException: boolean;

  catch(exception: HttpException, host: ArgumentsHost) {
    this.isFirstException = exception instanceof FirstException;
    this.exception = exception;

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    response.status(this.getStatus()).json(this.getBody(request));
  }

  private getStatus(): HttpStatus {
    return this.isFirstException
      ? this.exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;
  }

  private getBody(request: Request): string | object {
    const body = this.isFirstException
      ? this.exception.getResponse()
      : {
          errors: [
            {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              path: request.url,
              message:
                '서버에 알 수 없는 에러가 생겼습니다. 관리자에게 문의해주세요.',
            },
          ],
        };
    if (process.env.NODE_ENV !== 'production') this.setDebug(body);
    return body;
  }

  private setDebug(body: object | string) {
    const format = this.exception.stack.split('\n');
    body['debug'] = {
      type: format[0],
      file: format[1].match(/at (\w+\.\w+)/)?.[1],
    };
  }
}
