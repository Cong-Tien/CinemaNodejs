import { ApiProperty } from "@nestjs/swagger"

export class movieDTO  {
  @ApiProperty({description:"name",type: String})
  ten_phim: string
  @ApiProperty({description:"trailer",type: String})
  trailer: string
  @ApiProperty({description:"desc",type: String})
  mo_ta: string | null
  @ApiProperty({description:"time",type: Number})
  thoi_luong: number
  @ApiProperty({description:"rate",type: Number})
  danh_gia: number
  @ApiProperty({description:"premiere",type: Date})
  ngay_khoi_chieu: string
  @ApiProperty({description:"hot",type: Boolean})
  hot: boolean
  @ApiProperty({description:"release",type: Date})
  ngay_ket_thuc: string
  @ApiProperty({description:"producer",type: String})
  san_xuat: string
  @ApiProperty({description:"director",type: String})
  dao_dien: string | null
  nam_sx: number
  @ApiProperty({description:"poster",type: String})
  ap_phich: string
  dang_chieu: boolean | null
  sap_chieu: boolean | null
  }