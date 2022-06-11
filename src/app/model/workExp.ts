export class WorkExp{
  id?: number;
  content: string;
  endDate: string;
  startDate: string;
  title: string;
  cv: any;


  constructor(content: string, endDate: string, startDate: string, title: string, cv: any) {
    this.content = content;
    this.endDate = endDate;
    this.startDate = startDate;
    this.title = title;
    this.cv = cv;
  }
}
