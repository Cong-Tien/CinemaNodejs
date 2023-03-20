import { Module } from '@nestjs/common';
import { SystemCinemaController } from './system_cinema.controller';
import { SystemCinemaService } from './system_cinema.service';

@Module({
  controllers: [SystemCinemaController],
  providers: [SystemCinemaService]
})
export class SystemCinemaModule {}
