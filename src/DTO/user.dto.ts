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
  @ApiProperty({description:"name",type: String})
  name: string;
  @IsStrongPassword()
  @ApiProperty({description:"password",type: String})
  password: string
  @ApiProperty({description:"birthDay",type: Date})
  ngay_sinh: string | null
  // @IsPhoneNumber()
  @ApiProperty({description:"phone",type: Number})
  sdt: string | null
  @IsEmail()
  @ApiProperty({description:"email",type: String})

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
  @ApiProperty({description:"name",type: String})
  name: string;
  @IsStrongPassword()
  @ApiProperty({description:"password",type: String})
  password: string
  @ApiProperty({description:"birthDay",type: Date})
  ngay_sinh: string | null
  // @IsPhoneNumber()
  @ApiProperty({description:"phone",type: Number})
  sdt: string | null
  @ApiProperty({description:"email",type: String})
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
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({description:"User or email",type: String})
  email: string | null

  @ApiProperty({description:"Password",type: Number})
  @IsStrongPassword()
  password: string
}
