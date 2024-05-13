import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerService } from './common/logging/logger.service';
import { LoggingInterceptor } from './common/logging/logging.interceptor';
import { setupSwagger } from './common/document/swagger.setup';
import { GlobalValidationPipe } from './common/pips/global-validation.pipe';
import { HttpExceptionFilter } from './common/filters/all.exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new GlobalValidationPipe());
  app.useLogger(app.get(LoggerService));
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());

  await setupSwagger(app);

  await app.listen(8080);
}
bootstrap();
