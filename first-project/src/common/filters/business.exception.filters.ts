import { BusinessException } from '../exception/business.exception';
import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(BusinessException)
export class BusinessExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(BusinessExceptionFilter.name);

  catch(exception: BusinessException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    this.logger.error(`ErrorCode: ${exception.errorCode.code} ErrorMessage: ${exception.errorCode.message} form`)

    response
      .status(exception.errorCode.code)
      .json(exception.toResponse(request.url));
  }
}
