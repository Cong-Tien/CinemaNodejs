import { Injectable } from '@nestjs/common';
import {JwtService} from "@nestjs/jwt"
import {ConfigService} from "@nestjs/config"
@Injectable()
export class AuthService {
    constructor( private jwtService: JwtService,
        private config: ConfigService){

    }
    login(): string {

        let token = this.jwtService.sign({data:"hello"},{secret:this.config.get("SECRET_KEY"),expiresIn:"5m"})
        return token
    }
    signup():string{
        return "token"
    }
}
