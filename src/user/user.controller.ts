import {
  Controller,
  Get,
  Req,
  UseGuards,
  HttpException,
  UseInterceptors,
  UploadedFile,
  Post,
  Body,
  Headers,
  Res,
  Delete,
  Param,
  Put,
  Query,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { ApiParam, ApiProperty } from '@nestjs/swagger';
import { ApiConsumes } from '@nestjs/swagger';
import { ApiBody } from '@nestjs/swagger';
import { ApiBearerAuth } from '@nestjs/swagger/dist';
import { Request, Response } from 'express';
import { diskStorage } from 'multer';
import { fileDto, FileUploadDto, userDto } from '../DTO/user.dto';
import { UserService } from './user.service';

class BodyApp {
  @ApiProperty({ description: 'idBody', type: Number })
  idBody: number;
  @ApiProperty({ description: 'hoTen', type: String })
  hoTen: String;
}
@ApiTags('User')
@Controller('/user')
export class UserController {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {}
  @Post('/getHello')
  getHello(@Body() body: BodyApp): any {
    return 'hello';
  }
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Get('/getUser/:hoTen')
  getUser(
    @Req() req: Request,
    @Headers('Authorization') Authorization: string,
  ): any {
    try {
      let token = req.user;
      //return token;
      // return this.configService.get("NODE")
      return this.userService.getUser(this.configService.get('NODEE'));
    } catch (err) {
      throw new HttpException('khong co quyen', 500);
    }
  }
  @ApiParam({ name: 'idParams' })
  @Get('/getFood')
  getFood(): string {
    // return this.configService.get("NODE")
    return 'get food';
  }

  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'List of cats',
    type: FileUploadDto,
  })
  @UseInterceptors(
    FileInterceptor('fileUpload', {
      storage: diskStorage({
        destination: process.cwd() + '/public/img', // định nghĩa nơi lưu
        filename: (req, file, cb) => cb(null, Date.now() + file.originalname),
      }),
    }),
  )
  @Post('/getUpload')
  //   getUpload(@UploadedFile() file:Express.Multer.File): Express.Multer.File {
  getUpload(@UploadedFile() file: fileDto): fileDto {
    // return this.configService.get("NODE")
    return file;
  }

  @Post("/ticketsUser")
    getListTicketByUser(@Res() res: Response,@Query("idUser") idUser: number): Promise<any> {
        return this.userService.getListTicketByUser(res,idUser)
    }

  @Get()
    getAllUser(@Res() res: Response): Promise<any> {
        return this.userService.getAllUser(res)
    }

    @Post()
    createUser(@Res() res: Response,@Body() user: userDto): object{
        return this.userService.createUser(res,user)
    }

    @Delete("/:idParam")
    deleteUser(@Res() res: Response,@Param("idParam") idParam:string,): object{
        return this.userService.deleteUser(res,idParam)
    }
    @Put("/:idParam")
    updateUser(@Res() res: Response,@Param("idParam") idParam:string,@Body() user: userDto): object{
        return this.userService.updateUser(res,idParam,user)
    }
    @Post("/detail/:idParam")
    detailUser(@Res() res: Response,@Param("idParam") idParam:number): object{
        return this.userService.getDetailUser(res,idParam)
    }
    @Post("/search")
    searchUser(@Res() res: Response,@Query("key") key:string): object{
        return this.userService.searchUser(res,key)
    }
}
