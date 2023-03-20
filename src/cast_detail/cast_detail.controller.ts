import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { CastDetailService } from './cast_detail.service';
import { Response } from 'express';

@Controller('cast-detail')
export class CastDetailController {
    constructor(private castDetailService: CastDetailService){}

    @Get()
    getAllCastDetail(@Res() res: Response): Promise<any> {
        return this.castDetailService.getAllCastDetail(res)
    }

    @Post()
    createCastDetail(@Res() res: Response,@Body() castDetail: castDetailDTO): object{
        return this.castDetailService.createCastDetail(res,castDetail)
    }

    @Delete("/:idParam")
    deleteCastDetail(@Res() res: Response,
                @Param("idParam") idParam:string,): object{
        return this.castDetailService.deleteCastDetail(res,idParam)
    }
    @Put("/:idParam")
    updateCastDetail(@Res() res: Response,
                @Param("idParam") idParam:string,
                @Body() castDetail: castDetailDTO): object{
        return this.castDetailService.updateCastDetail(res,idParam,castDetail)
    }
}
