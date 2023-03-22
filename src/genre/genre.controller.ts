import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res } from '@nestjs/common';
import { GenreService } from './genre.service';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { genreDTO } from 'src/DTO/genre.dto';

@ApiTags("gnrre")
@Controller('genre')
export class GenreController {
    constructor(private genreService: GenreService){}

    @Get()
    getAllGenre(@Res() res: Response): Promise<any> {
        return this.genreService.getAllGenre(res)
    }

    @Post()
    createGenre(@Res() res: Response,@Body() genre: genreDTO): object{
        return this.genreService.createGenre(res,genre)
    }

    @Delete("/:idParam")
    deleteGenre(@Res() res: Response,
                @Param("idParam") idParam:string,): object{
        return this.genreService.deleteGenre(res,idParam)
    }
    @Put("/:idParam")
    updateGenre(@Res() res: Response,
                @Param("idParam") idParam:string,
                @Body() genre: genreDTO): object{
        return this.genreService.updateGenre(res,idParam,genre)
    }

    @Post("/detail/:idParam")
    detailGenre(@Res() res: Response,@Param("idParam") idParam:number): object{
        return this.genreService.getDetailGenre(res,idParam)
    }
    @Post("/search")
    searchGenre(@Res() res: Response,@Query("key") key:string): object{
        return this.genreService.searchGenre(res,key)
    }
}
