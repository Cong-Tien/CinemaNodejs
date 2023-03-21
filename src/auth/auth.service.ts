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
                    let token = this.jwtService
                                    .sign({data:{user:checkEmail.email, typeToken: checkEmail.type_token}},
                                    {secret:this.config.get("SECRET_KEY"),
                                    expiresIn:"5m"})
                    checkEmail.access_token = token;
                    let data = await this.prisma.user.update({
                        where: {
                            id: checkEmail.id
                        },
                        data: checkEmail
                    })
                    return successCode(res,"Logged in successfully",data);
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
            user.type_token="user"
            let token = this.jwtService
                                    .sign({data:{user:user.email,typeToken: user.type_token}},
                                    {secret:this.config.get("SECRET_KEY"),
                                    expiresIn:"5m"})
            user.access_token=token
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
