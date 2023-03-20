import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { errorCode, successCode } from 'src/payload/response/DataResponse';
import { Response } from 'express';

@Injectable()
export class TicketService {
    private prisma: PrismaClient = new PrismaClient();

    async getAllTicket(res: Response):Promise<any>{
        try{
            let data = await this.prisma.ticket.findMany()
            return successCode(res,"Successfully retrieved data",data);
        }
        catch(err){ 
            return errorCode(res,"Error Backend")
        }
    }

    async createTicket(res: Response,ticket:ticketDTO):Promise<any>{
        try{
            await this.prisma.ticket.create({data:ticket})
            return successCode(res,"Successful data generation!",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async deleteTicket(res: Response,idParam:any):Promise<any>{
        try{
            await this.prisma.ticket.delete({where:{
                id:Number(idParam)
            }});;
            return successCode(res,"Delete data successfully!",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async updateTicket(res: Response,idParam:string,ticket:ticketDTO):Promise<any>{
        try{
            await this.prisma.ticket.update({where:{
                id:Number(idParam)
            },data:ticket})
            return successCode(res,"Update data successfully",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async getDetailTicket(res: Response,idParam:number):Promise<any>{
        try{
            let data = await this.prisma.ticket.findMany({
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

    async searchTicket(res: Response,key:string):Promise<any>{
        const dateObj = new Date(Date.parse(key));
        try{
            let data = await this.prisma.ticket.findMany({
                where:{
                   
                    ngay_mua_ve:dateObj
                    
                }
            })
            return successCode(res,"Successfully retrieved data",data);
        }
        catch(err){ 
            return errorCode(res,"Error Backend")
        }
    }
}
