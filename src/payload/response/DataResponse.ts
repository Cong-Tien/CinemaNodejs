export interface DataResponse {
  isSuccess: boolean;
  status: number;
  desc: String;
  data: [];
}

export const successCode = (res,desc,data) => {
    res.status(200).json({
        isSuccess:true,
        status:200,
        desc,
        data
    })
}

export const failCode = (res,desc) => {
    res.status(400).json({
        isSuccess:false,
        status:400,
        desc,
    })
}

export const errorCode = (res,desc) => {
    res.status(500).json({
        isSuccess:false,
        status:500,
        desc,
    })
}
