import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Response } from 'express';
import { roomDTO } from 'src/DTO/room.dto';
import { errorCode, successCode } from 'src/payload/response/DataResponse';

@Injectable()
export class RoomService {
    private prisma: PrismaClient = new PrismaClient();

    async getAllRoom(res: Response):Promise<any>{
        try{
            let data = await this.prisma.room.findMany()
            return successCode(res,"Successfully retrieved data",data);
        }
        catch(err){ 
            return errorCode(res,"Error Backend")
        }
    }

    async createRoom(res: Response,room:roomDTO):Promise<any>{
        try{
            await this.prisma.room.create({data:room})
            return successCode(res,"Successful data generation!",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async deleteRoom(res: Response,idParam:any):Promise<any>{
        try{
            await this.prisma.room.delete({where:{
                id_room:Number(idParam)
            }});;
            return successCode(res,"Delete data successfully!",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async updateRoom(res: Response,idParam:string,room:roomDTO):Promise<any>{
        try{
            await this.prisma.room.update({where:{
                id_room:Number(idParam)
            },data:room})
            return successCode(res,"Update data successfully",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async getDetailRoom(res: Response,idParam:number):Promise<any>{
        try{
            let data = await this.prisma.room.findMany({
                where:{
                    id_room:Number(idParam)
                }
            })
            return successCode(res,"Successfully retrieved data",data);
        }
        catch(err){ 
            return errorCode(res,"Error Backend")
        }
    }

    async searchRoom(res: Response,key:string):Promise<any>{
        try{
            let data = await this.prisma.room.findMany({
                where:{
                    name_room:{
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
