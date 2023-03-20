import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Response } from 'express';
import { DataResponse, errorCode, successCode } from 'src/payload/response/DataResponse';
import { movieDTO } from 'src/user/DTO/movie.dto';

@Injectable()
export class MovieService {
    private prisma: PrismaClient = new PrismaClient();

    async getAllMovie(res: Response):Promise<any>{
        try{
            let data = await this.prisma.phim.findMany()
            return successCode(res,"Success",data);
        }
        catch(err){ 
            return errorCode(res,"Error Backend")
        }
    }

    async createMovie(res: Response,movie:movieDTO):Promise<any>{
        try{
            await this.prisma.phim.create({data:movie})
            return successCode(res,"Success",null);
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
            return successCode(res,"Success",null);
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
            return successCode(res,"Success",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }
}
