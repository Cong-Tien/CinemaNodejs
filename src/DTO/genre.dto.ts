import { ApiProperty } from "@nestjs/swagger"

export class genreDTO {
  @ApiProperty({description:"name",type: Number})
    genre_name: string
    @ApiProperty({description:"description",type: Number})
    description:string
  }