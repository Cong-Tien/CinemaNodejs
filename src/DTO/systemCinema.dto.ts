import { ApiProperty } from "@nestjs/swagger"

export class systemCinemaDTO {
  @ApiProperty({description:"neame",type: String})
    ten_htr:string   
    @ApiProperty({description:"logo",type: String})
    logo: string 
    @ApiProperty({description:"hotcall",type: Number})
    hot_call: number
    @ApiProperty({description:"area",type: String})
    khu_vuc : string
  }