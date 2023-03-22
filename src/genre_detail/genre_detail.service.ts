import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { errorCode, successCode } from 'src/payload/response/DataResponse';
import { Response } from 'express';
import { genredDetailDTO } from 'src/DTO/genre_detail.dto';

@Injectable()
export class GenreDetailService {
    private prisma: PrismaClient = new PrismaClient();

    async getAllGenreDetail(res: Response):Promise<any>{
        try{
            let data = await this.prisma.genre_detail.findMany()
            return successCode(res,"Successfully retrieved data",data);
        }
        catch(err){ 
            return errorCode(res,"Error Backend")
        }
    }

    async createGenreDetail(res: Response,genreDetail: genredDetailDTO):Promise<any>{
        try{
            await this.prisma.genre_detail.create({data:genreDetail})
            return successCode(res,"Successful data generation!",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async deleteGenreDetail(res: Response,idParam:any):Promise<any>{
    }

    async updateGenreDetail(res: Response,idParam:string,genreDetail:genredDetailDTO):Promise<any>{
    }
}
