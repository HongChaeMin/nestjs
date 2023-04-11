import { ArgumentMetadata, ArgumentsHost, Injectable } from '@nestjs/common';
import { Request } from 'express';

export function IdPipe(): any {
  return function (context: ArgumentsHost) {
    // const request = context.switchToHttp().getRequest();
    // request.headers.id;
  };
}
