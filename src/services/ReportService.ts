import { IReport, Report } from '../models/Report';

class ReportService {
  private reports: IReport[] = [];

  generateReport(type: string): IReport {
    const report: IReport = new Report(
      this.reports.length + 1,
      type,
      {}, // Report data generation logic
      new Date()
    );
    this.reports.push(report);
    return report;
  }
}

export { ReportService };