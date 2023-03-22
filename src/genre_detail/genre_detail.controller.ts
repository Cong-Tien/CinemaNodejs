import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { GenreDetailService } from './genre_detail.service';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { genredDetailDTO } from 'src/DTO/genre_detail.dto';

@ApiTags("genre detail")
@Controller('genre-detail')
export class GenreDetailController {
    constructor(private genreDetailService: GenreDetailService){}

    @Get()
    getAllGenreDetail(@Res() res: Response): Promise<any> {
        return this.genreDetailService.getAllGenreDetail(res)
    }

    @Post()
    createGenreDetail(@Res() res: Response,
            @Body() genreDetail: genredDetailDTO): object{
        return this.genreDetailService.createGenreDetail(res,genreDetail)
    }

    @Delete("/:idParam")
    deleteGenreDetail(@Res() res: Response,
                @Param("idParam") idParam:string,): object{
        return this.genreDetailService.deleteGenreDetail(res,idParam)
    }
    @Put("/:idParam")
    updateGenreDetail(@Res() res: Response,
                @Param("idParam") idParam:string,
                @Body() GenreDetail: genredDetailDTO): object{
        return this.genreDetailService.updateGenreDetail(res,idParam,GenreDetail)
    }
}
