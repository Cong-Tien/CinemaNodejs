import { Module } from '@nestjs/common';
import { CastDetailController } from './cast_detail.controller';
import { CastDetailService } from './cast_detail.service';

@Module({
  controllers: [CastDetailController],
  providers: [CastDetailService]
})
export class CastDetailModule {}
