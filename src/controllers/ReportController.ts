import { ReportService } from '../services/ReportService';
import { IReport } from '../models/Report';

class ReportController {
  constructor(private reportService: ReportService = new ReportService()) {}

  generateReport(type: string): IReport {
    return this.reportService.generateReport(type);
  }
}

export { ReportController };