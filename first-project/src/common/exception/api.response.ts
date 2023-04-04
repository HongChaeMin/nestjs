import { ErrorCode } from "./error.code";

export class ApiResponse {
  constructor(
    status: number,
    message: string,
    data: any,
  ) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
  status: number;
  message: string;
  data: any;

  static SUCCESS (data?: any) {
    return new ApiResponse(200, 'success', data || null);
  }

  static ERROR (errorCode: ErrorCode, data: any) {
    return new ApiResponse(errorCode.code, errorCode.message, data);
  }

}
