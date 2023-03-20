import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { errorCode, successCode } from 'src/payload/response/DataResponse';
import { Response } from 'express';

@Injectable()
export class GenreService {
    private prisma: PrismaClient = new PrismaClient();

    async getAllGenre(res: Response):Promise<any>{
        try{
            let data = await this.prisma.genre.findMany()
            return successCode(res,"Successfully retrieved data",data);
        }
        catch(err){ 
            return errorCode(res,"Error Backend")
        }
    }

    async createGenre(res: Response,genre:genreDTO):Promise<any>{
        try{
            await this.prisma.genre.create({data:genre})
            return successCode(res,"Successful data generation!",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async deleteGenre(res: Response,idParam:any):Promise<any>{
        try{
            await this.prisma.genre.delete({where:{
                id:Number(idParam)
            }});;
            return successCode(res,"Delete data successfully!",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async updateGenre(res: Response,idParam:string,genre:genreDTO):Promise<any>{
        try{
            await this.prisma.genre.update({where:{
                id:Number(idParam)
            },data:genre})
            return successCode(res,"Update data successfully",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async getDetailGenre(res: Response,idParam:number):Promise<any>{
        try{
            let data = await this.prisma.genre.findMany({
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

    async searchGenre(res: Response,key:string):Promise<any>{
        try{
            let data = await this.prisma.genre.findMany({
                where:{
                    genre_name:{
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
