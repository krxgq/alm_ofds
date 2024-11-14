interface ISupportRequest {
    id: number;
    userId: number;
    message: string;
    status: string;
  }
  
  class SupportService {
    private requests: ISupportRequest[] = [];
  
    submitSupportRequest(request: ISupportRequest): ISupportRequest {
      this.requests.push(request);
      return request;
    }
  }
  
  export { SupportService, ISupportRequest };