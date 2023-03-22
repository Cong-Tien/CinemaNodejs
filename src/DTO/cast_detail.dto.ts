import { ApiProperty } from "@nestjs/swagger"

export class castDetailDTO {
  @ApiProperty({description:"id_phim",type: Number})
    id_phim:number
    @ApiProperty({description:"id_dienvien",type: Number})
    id_dienvien:number
  }