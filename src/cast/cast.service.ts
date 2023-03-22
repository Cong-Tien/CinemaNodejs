import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { errorCode, successCode } from 'src/payload/response/DataResponse';
import { Response } from 'express';
import { castDTO } from 'src/DTO/cast.dto';

@Injectable()
export class CastService {
    private prisma: PrismaClient = new PrismaClient();

    async getAllCast(res: Response):Promise<any>{
        try{
            let data = await this.prisma.dien_vien.findMany()
            return successCode(res,"Successfully retrieved data",data);
        }
        catch(err){ 
            return errorCode(res,"Error Backend")
        }
    }

    async createCast(res: Response,cast:castDTO):Promise<any>{
        try{
            //await this.prisma.dien_vien.create({data:cast})
            return successCode(res,"Successful data generation!",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async deleteCast(res: Response,idParam:any):Promise<any>{
        try{
            await this.prisma.dien_vien.delete({where:{
                id:Number(idParam)
            }});;
            return successCode(res,"Delete data successfully!",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async updateCast(res: Response,idParam:string,cast:castDTO):Promise<any>{
        try{
            // await this.prisma.dien_vien.update({where:{
            //     id:Number(idParam)
            // },data:cast})
            return successCode(res,"Update data successfully",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async getDetailCast(res: Response,idParam:number):Promise<any>{
        try{
            let data = await this.prisma.dien_vien.findMany({
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

    async searchCast(res: Response,key:string):Promise<any>{
        try{
            let data = await this.prisma.dien_vien.findMany({
                where:{
                    ten_dienvien:{
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
