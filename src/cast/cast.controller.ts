import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CastService } from './cast.service';
import { Response } from 'express';

@Controller('cast')
export class CastController {
    constructor(private castService: CastService){}

    @Get()
    getAllCast(@Res() res: Response): Promise<any> {
        return this.castService.getAllCast(res)
    }

    @Post()
    createCast(@Res() res: Response,@Body() cast: castDTO): object{
        return this.castService.createCast(res,cast)
    }

    @Delete("/:idParam")
    deleteCast(@Res() res: Response,
                @Param("idParam") idParam:string,): object{
        return this.castService.deleteCast(res,idParam)
    }
    @Put("/:idParam")
    updateCast(@Res() res: Response,
                @Param("idParam") idParam:string,
                @Body() cast: castDTO): object{
        return this.castService.updateCast(res,idParam,cast)
    }

    @Post("/detail/:idParam")
    detailCast(@Res() res: Response,@Param("idParam") idParam:number): object{
        return this.castService.getDetailCast(res,idParam)
    }
    @Post("/search")
    searchCast(@Res() res: Response,@Query("key") key:string): object{
        return this.castService.searchCast(res,key)
    }
}
