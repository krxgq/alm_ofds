interface IReport {
    id: number;
    type: string;
    data: any;
    generatedAt: Date;
  }
  
  class Report implements IReport {
    constructor(
      public id: number,
      public type: string,
      public data: any,
      public generatedAt: Date
    ) {}
  }
  
  export { Report, IReport };