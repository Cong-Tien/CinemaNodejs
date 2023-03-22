import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MovieModule } from './movie/movie.module';
import { SystemCinemaModule } from './system_cinema/system_cinema.module';
import { CinemaModule } from './cinema/cinema.module';
import { ShowtimeModule } from './showtime/showtime.module';
import { TicketModule } from './ticket/ticket.module';
import { RoomModule } from './room/room.module';
import { CastModule } from './cast/cast.module';
import { GenreModule } from './genre/genre.module';
import { GenreDetailController } from './genre_detail/genre_detail.controller';
import { CastDetailModule } from './cast_detail/cast_detail.module';
import { GenreDetailService } from './genre_detail/genre_detail.service';
import { GenreDetailModule } from './genre_detail/genre_detail.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),UserModule, AuthModule, MovieModule, SystemCinemaModule, CinemaModule, ShowtimeModule, TicketModule, RoomModule, CastModule, GenreModule, CastDetailModule, GenreDetailModule, UploadModule],
  controllers: [AppController, GenreDetailController],
  providers: [AppService, GenreDetailService],
})
export class AppModule {}
