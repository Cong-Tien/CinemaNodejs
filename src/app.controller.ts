import { Body, Controller, Get ,HttpCode,Param,Query,Req} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AppService } from './app.service';

interface BodyApp {
  idBody: number,
  hoTen:string
}
@ApiBearerAuth()
@ApiTags("app")
@Controller("/api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/getHello/:idParams")
  @HttpCode(300)
  getHello(@Req() req:Request,
  @Param("idParams") idParam:string,
  @Query("idQuery") idQuery:string,
  @Body() body:BodyApp) : string {
    // let {idParams} = req.params;
    // let {idQuery} = req.query;
    // let {idBody,hoten} = req.body;
    // return this.appService.getHello();
    return idParam;
  }
}
