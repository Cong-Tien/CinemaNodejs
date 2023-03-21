import { Injectable } from '@nestjs/common';
import {JwtService} from "@nestjs/jwt"
import {ConfigService} from "@nestjs/config"
import { PrismaClient } from '@prisma/client';
import { Response } from 'express';
import { userDto, userLoginDto } from 'src/DTO/user.dto';
import { errorCode, failCode, successCode } from 'src/payload/response/DataResponse';
import { async } from 'rxjs';
@Injectable()
export class AuthService {
    constructor( private jwtService: JwtService,
        private config: ConfigService){

    }
    private prisma: PrismaClient = new PrismaClient();
    public bcrypt = require("bcrypt")

    async login(res:Response,user: userLoginDto):Promise<any> {
        try{
            let checkEmail = await this.prisma.user.findFirst({
                where:{
                    email:user.email,
                }
            })
            if(checkEmail){
                let checkPass = this.bcrypt.compareSync(user.password,checkEmail.password)
                if(checkPass){
                    return successCode(res,"Logged in successfully",null);
                }
                else{
                    return failCode(res,"Password incorrect!");
                }

            }
            
            console.log(user);

            return failCode(res,"Email incorrect!");
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
        //let token = this.jwtService.sign({data:"hello"},{secret:this.config.get("SECRET_KEY"),expiresIn:"5m"})
    }
    async signup(res:Response,user: userDto):Promise<any>{
        try{
            let checkEmail = await this.prisma.user.findFirst({
                where:{
                    email:user.email
                }
            })
            if(checkEmail){
                return failCode(res,"Email already exists!");
            }
            user.password = this.bcrypt.hashSync(user.password,10);
            //console.log(user);
            let register = await this.prisma.user.create({data:user})
            //  let register = await this.prisma.user.findFirst({
            //     where:{
            //         email:user.email
            //     }
            // })
            //console.log(register);
            return successCode(res,"Successful data generation!",register);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }
}
