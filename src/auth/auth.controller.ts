import { Body, Controller,Post, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import {userDto, userLoginDto } from 'src/DTO/user.dto';
import { AuthService } from './auth.service';

@ApiTags("Auth")
@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService) {}

    @Post("/login")
    login(@Res() res: Response,@Body() userDto:userLoginDto):object{
        return this.authService.login(res,userDto)
    }
    @Post("/signup")
    signup(@Res() res: Response,@Body() userDto:userDto) : object{
        return this.authService.signup(res,userDto)
    }
}
