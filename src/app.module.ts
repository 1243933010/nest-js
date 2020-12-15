import { Module,NestModule,MiddlewareConsumer,RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CatsModule} from './cats/cats.module';
import {AuthModule} from './auth/auth.module'
import {LoggerMiddleware } from './common/middleware/logger.middleware';
import {logger } from './common/middleware/logFnc.middleware';
@Module({
  imports: [CatsModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule  implements NestModule{
  configure(consumer:MiddlewareConsumer){
    consumer.apply(LoggerMiddleware,logger)
            .forRoutes({ path: 'cats', method: RequestMethod.GET })
            // .exclude(
            // {path:'cats',method:RequestMethod.GET},
            // {path:'cats',method:RequestMethod.POST}
            // )
  }
}
