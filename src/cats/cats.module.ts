import { Module,Global } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Global()//CatsService组件将无处不在，而想要使用CatsService的模块则不需要在imports数组中导入CatsModule(不推荐全局导出)
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports:[CatsService],//共享CatsService实例s
})
export class CatsModule {}