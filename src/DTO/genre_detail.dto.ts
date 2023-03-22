import { ApiProperty } from "@nestjs/swagger"

export class genredDetailDTO {
  @ApiProperty({description:"id_movie",type: Number})
    id_phim:number
    @ApiProperty({description:"id_genre",type: Number})
    id_theloai:number
  }