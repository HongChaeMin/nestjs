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

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => this.logger.log(`RequestUrl: [${request?.method || 'GraphQL'}] \'${request?.url || ''}\' Status: ${response?.statusCode || 'GraphQL'} After: ${Date.now() - now}ms form`)),
        tap(json => this.logger.log(`Response: ${JSON.stringify(json).substring(0, 150)}... form`)),
      );

  }
}
