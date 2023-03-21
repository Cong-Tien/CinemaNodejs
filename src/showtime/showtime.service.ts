import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { errorCode, successCode } from 'src/payload/response/DataResponse';
import { Response } from 'express';

@Injectable()
export class ShowtimeService {
    private prisma: PrismaClient = new PrismaClient();

    async getListTicketByShowtime(res: Response, idShowtime:number):Promise<any>{
        try{
            let data = await this.prisma.show_time.findMany({
                where:{
                    id_showtime:Number(idShowtime)
                },
                include:{
                    phim:true,
                    ticket:true
                }
            })
            return successCode(res,"Successfully retrieved data",data);
        }
        catch(err){ 
            return errorCode(res,"Error Backend")
        }
    }


    async getAllShowtime(res: Response):Promise<any>{
        try{
            let data = await this.prisma.show_time.findMany({
                include:{
                    phim:true,
                    ticket:true
                }
            })
            return successCode(res,"Successfully retrieved data",data);
        }
        catch(err){ 
            return errorCode(res,"Error Backend")
        }
    }

    async createShowtime(res: Response,showtime:showtimeDTO):Promise<any>{
        try{
            await this.prisma.show_time.create({data:showtime})
            return successCode(res,"Successful data generation!",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async deleteShowtime(res: Response,idParam:any):Promise<any>{
        try{
            await this.prisma.show_time.delete({where:{
                id_showtime:Number(idParam)
            }});;
            return successCode(res,"Delete data successfully!",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async updateShowtime(res: Response,idParam:string,showtime:showtimeDTO):Promise<any>{
        try{
            await this.prisma.show_time.update({where:{
                id_showtime:Number(idParam)
            },data:showtime})
            return successCode(res,"Update data successfully",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async getDetailShowtime(res: Response,idParam:number):Promise<any>{
        try{
            let data = await this.prisma.show_time.findMany({
                where:{
                    id_showtime:Number(idParam)
                }
            })
            return successCode(res,"Successfully retrieved data",data);
        }
        catch(err){ 
            return errorCode(res,"Error Backend")
        }
    }

    async searchShowtime(res: Response,key:string):Promise<any>{
        try{
            let data = await this.prisma.show_time.findMany({
                where:{
                    showtime:key
                }
            })
            return successCode(res,"Successfully retrieved data",data);
        }
        catch(err){ 
            return errorCode(res,"Error Backend")
        }
    }
}
