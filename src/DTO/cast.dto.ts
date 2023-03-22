import { ApiProperty } from "@nestjs/swagger"

export class castDTO {
  @ApiProperty({description:"name",type: Number})
    ten_dienvie: string
    @ApiProperty({description:"yearOfBirth",type: Number})
    nam_sinh:number
    @ApiProperty({description:"note",type: String})
    ghi_chu: string
    @ApiProperty({description:"rate",type: Number})
    danh_gia: number
  }