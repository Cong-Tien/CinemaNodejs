import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { SystemCinemaService } from './system_cinema.service';

@Controller('system-cinema')
export class SystemCinemaController {
    constructor(private systemCinemaService: SystemCinemaService){}

    @Get()
    getAllSystemCinema(@Res() res: Response): Promise<any> {
        return this.systemCinemaService.getAllSystemCinema(res)
    }

    @Post()
    createSystemCinema(@Res() res: Response,@Body() system: systemCinemaDTO): object{
        return this.systemCinemaService.createSystemCinema(res,system)
    }

    @Delete("/:idParam")
    deleteSystemCinema(@Res() res: Response,@Param("idParam") idParam:string,): object{
        return this.systemCinemaService.deleteSystemCinema(res,idParam)
    }
    @Put("/:idParam")
    updateSystemCinema(@Res() res: Response,@Param("idParam") idParam:string,@Body() system: systemCinemaDTO): object{
        return this.systemCinemaService.updateSystemCinema(res,idParam,system)
    }

    @Post("/detail/:idParam")
    detailSystemCinema(@Res() res: Response,@Param("idParam") idParam:number): object{
        return this.systemCinemaService.getDetailSystemCinema(res,idParam)
    }
    @Post("/search")
    searchSystemCinema(@Res() res: Response,@Query("key") key:string): object{
        return this.systemCinemaService.searchSystemCinema(res,key)
    }
}
