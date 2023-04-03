import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { Request, Response } from 'express';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> | Promise<Observable<any>> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    this.logger.debug(`RequestUrl: [${request.method}] ${request.url} form`);

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => this.logger.debug(`Status: ${response.statusCode} / After: ${Date.now() - now}ms form`)),
        tap(json => this.logger.debug(`Response: ${JSON.stringify(json)} form`)),
      );

  }
}
