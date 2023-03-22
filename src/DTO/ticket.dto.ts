import { ApiProperty } from "@nestjs/swagger"

export class ticketDTO {
  @ApiProperty({description:"category",type: Number})
    loai_ve:number
    @ApiProperty({description:"purchaseDate",type: Date})
    ngay_mua_ve: string
    @ApiProperty({description:"seat",type: String})
    ghe:string
    @ApiProperty({description:"typeSeat",type: String})
    loai_ghe: string
    @ApiProperty({description:"status",type: String})
    trang_thai:number
    @ApiProperty({description:"sloid",type: Boolean})
    da_dat:string
    @ApiProperty({description:"price",type: Number})
    gia_ve: number
    @ApiProperty({description:"id_user",type: Number})
    id_user:number
    @ApiProperty({description:"id_showtime",type: Number})
    id_showtime:number
  }