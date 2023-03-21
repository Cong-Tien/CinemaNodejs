import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Response } from 'express';
import { errorCode, successCode } from 'src/payload/response/DataResponse';

@Injectable()
export class SystemCinemaService {
    private prisma: PrismaClient = new PrismaClient();

    async getAllSystemCinema(res: Response):Promise<any>{
        try{
            let data = await this.prisma.he_thong_rap.findMany({
                include:{
                    cum_rap:{
                        include:{
                            show_time:{
                                include:{
                                    phim:true
                                }
                            }
                        }
                    }
                }
            })
            return successCode(res,"Successfully retrieved data",data);
        }
        catch(err){ 
            return errorCode(res,"Error Backend")
        }
    }

    async createSystemCinema(res: Response,system:systemCinemaDTO):Promise<any>{
        try{
            await this.prisma.he_thong_rap.create({data:system})
            return successCode(res,"Successful data generation!",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async deleteSystemCinema(res: Response,idParam:any):Promise<any>{
        try{
            await this.prisma.he_thong_rap.delete({where:{
                ma_htr:Number(idParam)
            }});;
            return successCode(res,"Delete data successfully!",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async updateSystemCinema(res: Response,idParam:string,system:systemCinemaDTO):Promise<any>{
        try{
            await this.prisma.he_thong_rap.update({where:{
                ma_htr:Number(idParam)
            },data:system})
            return successCode(res,"Update data successfully",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async getDetailSystemCinema(res: Response,idParam:number):Promise<any>{
        try{
            let data = await this.prisma.he_thong_rap.findMany({
                where:{
                    ma_htr:Number(idParam)
                }
            })
            return successCode(res,"Successfully retrieved data",data);
        }
        catch(err){ 
            return errorCode(res,"Error Backend")
        }
    }

    async searchSystemCinema(res: Response,key:string):Promise<any>{
        try{
            let data = await this.prisma.he_thong_rap.findMany({
                where:{
                    ten_htr:{
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
