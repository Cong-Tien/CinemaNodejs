import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { movieDTO } from 'src/DTO/movie.dto';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
    constructor(private movieService: MovieService){}

    @Get()
    getAllMovie(@Res() res: Response): Promise<any> {
        return this.movieService.getAllMovie(res)
    }

    @Post()
    createMovie(@Res() res: Response,@Body() movie: movieDTO): object{
        return this.movieService.createMovie(res,movie)
    }

    @Delete("/:idParam")
    deleteMovie(@Res() res: Response,@Param("idParam") idParam:string,): object{
        return this.movieService.deleteMovie(res,idParam)
    }
    @Put("/:idParam")
    updateMovie(@Res() res: Response,@Param("idParam") idParam:string,@Body() movie: movieDTO): object{
        return this.movieService.updateMovie(res,idParam,movie)
    }
    @Post("/detail/:idParam")
    detailMovie(@Res() res: Response,@Param("idParam") idParam:number): object{
        return this.movieService.getDetailMovie(res,idParam)
    }
    @Post("/search")
    searchMovie(@Res() res: Response,@Query("key") key:string): object{
        return this.movieService.searchMovie(res,key)
    }
}
