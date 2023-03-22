import { ApiProperty } from "@nestjs/swagger"

export class cinemaDTO {
  @ApiProperty({description:"name",type: String})
    name_cinema:string       
    @ApiProperty({description:"logo",type: String})
    logo_cinema:string   
    @ApiProperty({description:"infor",type: String})    
    infor:string
    @ApiProperty({description:"map",type: String})
    map_link: string    
    @ApiProperty({description:"opening hours",type: String})
    gio_mo_cua:string 
    @ApiProperty({description:"map",type: Number})
    ma_htr:number
  }
  