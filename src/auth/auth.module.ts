import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/Strategy/jwt.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { RolesGuard } from './guards/roles.guard';

@Module({
  imports:[JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy,RolesGuard]
})
export class AuthModule {}
