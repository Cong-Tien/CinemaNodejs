import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { fileDto, FileUploadDto } from 'src/DTO/uploadDTO.dto';
import { UploadService } from './upload.service';

@ApiTags("upload")
@Controller('upload')
export class UploadController {
    constructor(private uploadService : UploadService){}

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
  @Post('')
  //   getUpload(@UploadedFile() file:Express.Multer.File): Express.Multer.File {
  getUpload(@UploadedFile() file: fileDto): fileDto {
    // return this.configService.get("NODE")
    return file;
  }
}
