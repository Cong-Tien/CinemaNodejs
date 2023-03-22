import { ApiProperty } from "@nestjs/swagger";

export class fileDto {
    fieldname:string
    originalname: string
  }
  
  export class FileUploadDto {
    @ApiProperty({ type: 'string', format: 'binary' })
    fileUpload: any;
  }