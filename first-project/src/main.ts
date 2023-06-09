import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BusinessExceptionFilter } from './common/filters/business.exception.filter';
import { LoggerService } from './common/logging/logger.service';
import { LoggingInterceptor } from './common/logging/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, forbidUnknownValues: false }));
  app.useGlobalFilters(new BusinessExceptionFilter());
  app.useLogger(app.get(LoggerService));
  app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(8080);
}
bootstrap();
