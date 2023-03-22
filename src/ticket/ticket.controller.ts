import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { ticketDTO } from 'src/DTO/ticket.dto';

@ApiTags("ticket")
@Controller('ticket')
export class TicketController {
    constructor(private ticketService: TicketService){}

    @Post("/buy")
    buyTicket(@Res() res: Response, @Body() listTicket:ticketDTO[],@Query("idUser") idUser: number): Promise<any> {
        return this.ticketService.buyTicket(res,listTicket,idUser)
    }

    @Post("/ticketsUser")
    getListTicketByUser(@Res() res: Response,@Query("idUser") idUser: number): Promise<any> {
        return this.ticketService.getListTicketByUser(res,idUser)
    }

    @Get()
    getAllTicket(@Res() res: Response): Promise<any> {
        return this.ticketService.getAllTicket(res)
    }

    @Post()
    createTicket(@Res() res: Response,@Body() ticket: ticketDTO): object{
        return this.ticketService.createTicket(res,ticket)
    }

    @Delete("/:idParam")
    deleteTicket(@Res() res: Response,
                    @Param("idParam") idParam:string,): object{
        return this.ticketService.deleteTicket(res,idParam)
    }
    @Put("/:idParam")
    updateTicket(@Res() res: Response,
                    @Param("idParam") idParam:string,
                    @Body() ticket: ticketDTO): object{
        return this.ticketService.updateTicket(res,idParam,ticket)
    }

    @Post("/detail/:idParam")
    detailTicket(@Res() res: Response,@Param("idParam") idParam:number): object{
        return this.ticketService.getDetailTicket(res,idParam)
    }
    @Post("/search")
    searchTicket(@Res() res: Response,@Query("key") key:string): object{
        return this.ticketService.searchTicket(res,key)
    }
}
