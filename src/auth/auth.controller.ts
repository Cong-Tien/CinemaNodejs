import { Controller,Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags("Auth")
@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService) {}

    @Post("/login")
    login(){
        return this.authService.login()
    }
    @Post("/signup")
    signup(){
        return this.authService.signup()
    }
}