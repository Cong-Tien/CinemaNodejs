import { ApiProperty } from "@nestjs/swagger";

export interface userDto {
  name: string
  ngay_sinh: string | null
  sdt: string | null
  email: string | null
  access_token: string | null
  diem_tich_luy: number | null
  type_token: string | null
  refresh_token: string | null
  loai_tk: string | null
}

export class fileDto {
  fieldname:string
  originalname: string
}

export class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  fileUpload: any;
}