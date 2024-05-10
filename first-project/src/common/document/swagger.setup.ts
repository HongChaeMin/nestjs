import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as process from 'node:process';

export async function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('Buybly Swagger Docs')
    .setDescription('API 문서입니다.')
    .setVersion('v1.0.0')
    .addServer(process.env.BASE_URL)
    .addBearerAuth(
      {
        type: 'http',
        name: 'Authorization',
        description: 'JWT 인증 토큰',
        in: 'header',
      },
      'Authorization',
    )
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
}
