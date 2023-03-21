import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  IsNumber,
  IsEmail,
  IsPhoneNumber,
  IsStrongPassword
} from 'class-validator';
import { Role } from "src/model/role.enum";

export class userDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  name: string;
  @IsStrongPassword()
  password: string
  ngay_sinh: string | null
  // @IsPhoneNumber()
  sdt: string | null
  @IsEmail()
  email: string | null
  access_token: string | null
  diem_tich_luy: number | null
  type_token: "user"
  refresh_token: string | null
  loai_tk: string | null
}

class User {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  name: string;
  @IsStrongPassword()
  password: string
  ngay_sinh: string | null
  // @IsPhoneNumber()
  sdt: string | null
  @IsEmail()
  email: string | null
  access_token: string | null
  diem_tich_luy: number | null
  type_token: "user"
  refresh_token: string | null
  loai_tk: string | null
  // ...other properties
  roles: Role[];
}

export class userLoginDto {
  @IsStrongPassword()
  password: string
  @IsEmail()
  @IsNotEmpty()
  email: string | null
}


export class fileDto {
  fieldname:string
  originalname: string
}

export class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  fileUpload: any;
}