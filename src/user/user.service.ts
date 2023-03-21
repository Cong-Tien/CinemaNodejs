import { Injectable } from '@nestjs/common';
import {PrismaClient} from '@prisma/client'
import { Response } from 'express';
import { errorCode, successCode } from 'src/payload/response/DataResponse';
import { userDto } from '../DTO/user.dto';
@Injectable()
export class UserService {
    private prisma: PrismaClient = new PrismaClient();

     async getUser(hoTen:string): Promise<userDto[]> {
        return await this.prisma.user.findMany({
            where:{
                name:{
                    contains: hoTen
                }
            }
        });
    }

    async getListTicketByUser(res: Response,idUser: number):Promise<any>{
        try{
            let data = await this.prisma.ticket.findMany({
                where:{
                    id_user:Number(idUser)
                }
            })
            return successCode(res,"Successfully retrieved data",data);
        }
        catch(err){ 
            return errorCode(res,"Error Backend")
        }
    }

    async getAllUser(res: Response):Promise<any>{
        try{
            let data = await this.prisma.user.findMany()
            return successCode(res,"Successfully retrieved data",data);
        }
        catch(err){ 
            return errorCode(res,"Error Backend")
        }
    }

    async createUser(res: Response,user:userDto):Promise<any>{
        try{
            await this.prisma.user.create({data:user})
            return successCode(res,"Successful data generation!",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async deleteUser(res: Response,idParam:any):Promise<any>{
        try{
            await this.prisma.user.delete({where:{
                id:Number(idParam)
            }});;
            return successCode(res,"Delete data successfully!",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async updateUser(res: Response,idParam:string,user:userDto):Promise<any>{
        try{
            await this.prisma.user.update({where:{
                id:Number(idParam)
            },data:user})
            return successCode(res,"Update data successfully",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async getDetailUser(res: Response,idParam:number):Promise<any>{
        try{
            let data = await this.prisma.user.findMany({
                where:{
                    id:Number(idParam)
                }
            })
            return successCode(res,"Successfully retrieved data",data);
        }
        catch(err){ 
            return errorCode(res,"Error Backend")
        }
    }

    async searchUser(res: Response,key:string):Promise<any>{
        try{
            let data = await this.prisma.user.findMany({
                where:{
                    name:{
                        contains:key
                    }
                }
            })
            return successCode(res,"Successfully retrieved data",data);
        }
        catch(err){ 
            return errorCode(res,"Error Backend")
        }
    }
}
