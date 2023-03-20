import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MovieModule } from './movie/movie.module';
import { SystemModule } from './system/system.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),UserModule, AuthModule, MovieModule, SystemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
