import { ApiProperty } from "@nestjs/swagger"

export class roomDTO {
  @ApiProperty({description:"name",type: String})
    name_room: string
    @ApiProperty({description:"totalSeat",type: Number})
    total_seat:number
    @ApiProperty({description:"status",type: Number})
    status:number
    @ApiProperty({description:"rowSeat",type: Number})
    row_seat :number
    @ApiProperty({description:"columnSeat",type: Number})
    columne_seat:number
    @ApiProperty({description:"id_cinema",type: Number})
    id_cinema:number
  }