import { BusinessException } from '../exception/business.exception';
import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';

@Catch(BusinessException)
export class BusinessExceptionFilter implements ExceptionFilter {
  catch(exception: BusinessException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // response
    //   .status(HttpStatus.INTERNAL_SERVER_ERROR)
    //   .status()
    //   .json(exception.errorCode.toResponse(request.url));
  }
}
