import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CinemaService } from './cinema.service';
import { Response } from 'express';

@Controller('cinema')
export class CinemaController {
    constructor(private cinemaService: CinemaService){}

    @Get()
    getAllCinema(@Res() res: Response): Promise<any> {
        return this.cinemaService.getAllCinema(res)
    }

    @Post()
    createCinema(@Res() res: Response,@Body() cinema: cinemaDTO): object{
        return this.cinemaService.createCinema(res,cinema)
    }

    @Delete("/:idParam")
    deleteCinema(@Res() res: Response,@Param("idParam") idParam:string,): object{
        return this.cinemaService.deleteCinema(res,idParam)
    }
    @Put("/:idParam")
    updateCinema(@Res() res: Response,
                    @Param("idParam") idParam:string,
                    @Body() cinema: cinemaDTO): object{
        return this.cinemaService.updateCinema(res,idParam,cinema)
    }

    @Post("/detail/:idParam")
    detailCinema(@Res() res: Response,@Param("idParam") idParam:number): object{
        return this.cinemaService.getDetailCinema(res,idParam)
    }
    @Post("/search")
    searchCinema(@Res() res: Response,@Query("key") key:string): object{
        return this.cinemaService.searchCinema(res,key)
    }
}
