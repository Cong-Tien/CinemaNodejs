import { ApiProperty } from "@nestjs/swagger";

export interface userDto {
  user_id:number,
  full_name: string,
  email:string,
  pass_word:string
}

export class fileDto {
  fieldname:string
  originalname: string
}

export class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  fileUpload: any;
}