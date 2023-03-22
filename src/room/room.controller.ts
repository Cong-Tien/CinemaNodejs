import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res } from '@nestjs/common';
import { RoomService } from './room.service';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { roomDTO } from 'src/DTO/room.dto';

@ApiTags("room")
@Controller('room')
export class RoomController {
    constructor(private roomService: RoomService){}

    @Get()
    getAllRoom(@Res() res: Response): Promise<any> {
        return this.roomService.getAllRoom(res)
    }

    @Post()
    createRoom(@Res() res: Response,@Body() Room: roomDTO): object{
        return this.roomService.createRoom(res,Room)
    }

    @Delete("/:idParam")
    deleteRoom(@Res() res: Response,
                @Param("idParam") idParam:string,): object{
        return this.roomService.deleteRoom(res,idParam)
    }
    @Put("/:idParam")
    updateRoom(@Res() res: Response,
                @Param("idParam") idParam:string,
                @Body() room: roomDTO): object{
        return this.roomService.updateRoom(res,idParam,room)
    }

    @Post("/detail/:idParam")
    detailRoom(@Res() res: Response,@Param("idParam") idParam:number): object{
        return this.roomService.getDetailRoom(res,idParam)
    }
    @Post("/search")
    searchRoom(@Res() res: Response,@Query("key") key:string): object{
        return this.roomService.searchRoom(res,key)
    }
}
