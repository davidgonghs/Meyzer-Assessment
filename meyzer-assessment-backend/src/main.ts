import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swigger接口配置
  const options = new DocumentBuilder()
    .setTitle('Meyer Assessment API Document')
    .setDescription('Meyer Assessment API Document - Swagger')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  // 'api-doc'为Swagger UI 的挂载路径
  SwaggerModule.setup('api-doc', app, document);

  await app.listen(3000);
}
bootstrap();
