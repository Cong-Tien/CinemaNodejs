import { ApiProperty } from "@nestjs/swagger"

export class showtimeDTO {
  @ApiProperty({description:"showtime",type: Date})
    showtime: string
    @ApiProperty({description:"price",type: Number})
    price:number
    @ApiProperty({description:"status",type: Number})
    status: number 
    @ApiProperty({description:"id_room",type: Number})
    id_room:number
    @ApiProperty({description:"id_cinema",type: Number})
    id_cinema:number
    @ApiProperty({description:"ma_phim",type: Number})
    ma_phim:number
  }