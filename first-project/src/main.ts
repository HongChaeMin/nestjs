import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BusinessExceptionFilter } from "./common/filters/business.exception.filters";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, forbidUnknownValues: false }));
  app.useGlobalFilters(new BusinessExceptionFilter());
  await app.listen(3000);
}
bootstrap();
