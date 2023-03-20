import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Response } from 'express';
import { DataResponse, errorCode, successCode } from 'src/payload/response/DataResponse';
import { movieDTO } from 'src/DTO/movie.dto';

@Injectable()
export class MovieService {
    private prisma: PrismaClient = new PrismaClient();

    async getAllMovie(res: Response):Promise<any>{
        try{
            let data = await this.prisma.phim.findMany()
            return successCode(res,"Successfully retrieved data",data);
        }
        catch(err){ 
            return errorCode(res,"Error Backend")
        }
    }

    async createMovie(res: Response,movie:movieDTO):Promise<any>{
        try{
            await this.prisma.phim.create({data:movie})
            return successCode(res,"Successful data generation!",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async deleteMovie(res: Response,idParam:any):Promise<any>{
        try{
            await this.prisma.phim.delete({where:{
                id:Number(idParam)
            }});;
            return successCode(res,"Delete data successfully!",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async updateMovie(res: Response,idParam:string,movie:movieDTO):Promise<any>{
        try{
            await this.prisma.phim.update({where:{
                id:Number(idParam)
            },data:movie})
            return successCode(res,"Update data successfully",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async getDetailMovie(res: Response,idParam:number):Promise<any>{
        try{
            let data = await this.prisma.phim.findMany({
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

    async searchMovie(res: Response,key:string):Promise<any>{
        try{
            let data = await this.prisma.phim.findMany({
                where:{
                    ten_phim:{
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
