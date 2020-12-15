import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {saveRequest} from './common/middleware/saveRequest.middleware'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(saveRequest); //全局中间件
  await app.listen(3000);
}
bootstrap();
