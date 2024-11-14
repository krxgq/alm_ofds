import { SupportService, ISupportRequest } from '../services/SupportService';

class SupportController {
  constructor(
    private supportService: SupportService = new SupportService()
  ) {}

  submitSupportRequest(request: ISupportRequest): ISupportRequest {
    return this.supportService.submitSupportRequest(request);
  }
}

export { SupportController };