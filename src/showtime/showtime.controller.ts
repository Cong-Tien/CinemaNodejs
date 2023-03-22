import { Body, Controller, Delete, Get, Headers, HttpException, Param, Post, Put, Query, Req, Res, UseGuards } from '@nestjs/common';
import { ShowtimeService } from './showtime.service';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { failCode } from 'src/payload/response/DataResponse';

import { Role } from 'src/model/role.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { ApiBearerAuth, ApiHeaders, ApiTags } from '@nestjs/swagger';
import { showtimeDTO } from 'src/DTO/shotime.dto';

@ApiTags("shotime")
@Controller('showtime')
export class ShowtimeController {
    constructor(private showtimeService: ShowtimeService){}

    @Roles(Role.USER)
    @UseGuards(AuthGuard("jwt"),RolesGuard)   
    @Get("/ticketByShowtime/:idShowtime")
    @ApiBearerAuth()
    getListTicketByShowtime(@Req() req: Request,@Res() res: Response,
            @Param("idShowtime") idShowtime:number,
            @Headers("Authorization") Authorization: string): Promise<any> {
               try{
                let data = req.user; // lấy dữ liệu decode token
                console.log(data);
                return this.showtimeService.getListTicketByShowtime(res,idShowtime)
               }
               catch(err){
                // throw new HttpException("you do not have enough access to this api",500)
                failCode(res,"You do not have enough access to this API!")
               } 
    }

    @Get()
    getAllShowtime(@Res() res: Response): Promise<any> {
        return this.showtimeService.getAllShowtime(res)
    }

    @Post()
    @ApiBearerAuth()
    createShowtime(@Res() res: Response,
                    @Body() showtime: showtimeDTO): object{
        return this.showtimeService.createShowtime(res,showtime)
    }

    @Delete("/:idParam")
    @ApiBearerAuth()
    deleteShowtime(@Res() res: Response,
                    @Param("idParam") idParam:string,): object{
        return this.showtimeService.deleteShowtime(res,idParam)
    }
    @Put("/:idParam")
    @ApiBearerAuth()
    updateShowtime(@Res() res: Response,
                    @Param("idParam") idParam:string,
                    @Body() showtime: showtimeDTO): object{
        return this.showtimeService.updateShowtime(res,idParam,showtime)
    }
    @ApiBearerAuth()
    @Post("/detail/:idParam")
    detailShowtime(@Res() res: Response,@Param("idParam") idParam:number): object{
        return this.showtimeService.getDetailShowtime(res,idParam)
    }
    @Post("/search")
    searchShowtime(@Res() res: Response,@Query("key") key:string): object{
        return this.showtimeService.searchShowtime(res,key)
    }
}
