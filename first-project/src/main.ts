import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './common/document/swagger.setup';
import { GlobalValidationPipe } from './common/errors/pips/global-validation.pipe';
import { HttpExceptionFilter } from './common/errors/filters/all.exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new GlobalValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  await setupSwagger(app);

  await app.listen(8080);
}
bootstrap();
