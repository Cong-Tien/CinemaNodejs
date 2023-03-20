import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { errorCode, successCode } from 'src/payload/response/DataResponse';
import { Response } from 'express';

@Injectable()
export class CinemaService {
    private prisma: PrismaClient = new PrismaClient();

    async getAllCinema(res: Response):Promise<any>{
        try{
            let data = await this.prisma.cum_rap.findMany()
            return successCode(res,"Successfully retrieved data",data);
        }
        catch(err){ 
            return errorCode(res,"Error Backend")
        }
    }

    async createCinema(res: Response,cinema:cinemaDTO):Promise<any>{
        try{
            await this.prisma.cum_rap.create({data:cinema})
            return successCode(res,"Successful data generation!",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async deleteCinema(res: Response,idParam:any):Promise<any>{
        try{
            await this.prisma.cum_rap.delete({where:{
                id_cinema:Number(idParam)
            }});;
            return successCode(res,"Delete data successfully!",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async updateCinema(res: Response,idParam:string,Cinema:cinemaDTO):Promise<any>{
        try{
            await this.prisma.cum_rap.update({where:{
                id_cinema:Number(idParam)
            },data:Cinema})
            return successCode(res,"Update data successfully!",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async getDetailCinema(res: Response,idParam:number):Promise<any>{
        try{
            let data = await this.prisma.cum_rap.findMany({
                where:{
                    id_cinema:Number(idParam)
                }
            })
            return successCode(res,"Successfully retrieved data",data);
        }
        catch(err){ 
            return errorCode(res,"Error Backend")
        }
    }

    async searchCinema(res: Response,key:string):Promise<any>{
        try{
            let data = await this.prisma.cum_rap.findMany({
                where:{
                    name_cinema:{
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
