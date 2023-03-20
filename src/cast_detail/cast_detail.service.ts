import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { errorCode, successCode } from 'src/payload/response/DataResponse';
import { Response } from 'express';

@Injectable()
export class CastDetailService {
    private prisma: PrismaClient = new PrismaClient();

    async getAllCastDetail(res: Response):Promise<any>{
        try{
            let data = await this.prisma.ct_dienvien.findMany()
            return successCode(res,"Successfully retrieved data",data);
        }
        catch(err){ 
            return errorCode(res,"Error Backend")
        }
    }

    async createCastDetail(res: Response,castDetail:castDetailDTO):Promise<any>{
        try{
            await this.prisma.ct_dienvien.create({data:castDetail})
            return successCode(res,"Successful data generation!",null);
        }
        catch(err){
            console.log(err);
            return errorCode(res,"Error Backend")
        }
    }

    async deleteCastDetail(res: Response,idParam:any):Promise<any>{
    }

    async updateCastDetail(res: Response,idParam:string,castDetail:castDetailDTO):Promise<any>{
    }
}
