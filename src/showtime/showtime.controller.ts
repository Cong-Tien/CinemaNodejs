import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res } from '@nestjs/common';
import { ShowtimeService } from './showtime.service';
import { Response } from 'express';

@Controller('showtime')
export class ShowtimeController {
    constructor(private showtimeService: ShowtimeService){}

    @Get("/ticketByShowtime/:idShowtime")
    getListTicketByShowtime(@Res() res: Response,
            @Param("idShowtime") idShowtime:number): Promise<any> {
        return this.showtimeService.getListTicketByShowtime(res,idShowtime)
    }

    @Get()
    getAllShowtime(@Res() res: Response): Promise<any> {
        return this.showtimeService.getAllShowtime(res)
    }

    @Post()
    createShowtime(@Res() res: Response,
                    @Body() showtime: showtimeDTO): object{
        return this.showtimeService.createShowtime(res,showtime)
    }

    @Delete("/:idParam")
    deleteShowtime(@Res() res: Response,
                    @Param("idParam") idParam:string,): object{
        return this.showtimeService.deleteShowtime(res,idParam)
    }
    @Put("/:idParam")
    updateShowtime(@Res() res: Response,
                    @Param("idParam") idParam:string,
                    @Body() showtime: showtimeDTO): object{
        return this.showtimeService.updateShowtime(res,idParam,showtime)
    }

    @Post("/detail/:idParam")
    detailShowtime(@Res() res: Response,@Param("idParam") idParam:number): object{
        return this.showtimeService.getDetailShowtime(res,idParam)
    }
    @Post("/search")
    searchShowtime(@Res() res: Response,@Query("key") key:string): object{
        return this.showtimeService.searchShowtime(res,key)
    }
}
