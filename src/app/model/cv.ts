export class Cv {
  id?:number;
  expYear: number;
  fileCV: string;
  salaryExpectation:number;
  user:any;


  constructor( expYear: number, fileCV: string, salaryExpectation: number, user: any) {
    this.expYear = expYear;
    this.fileCV = fileCV;
    this.salaryExpectation = salaryExpectation;
    this.user = user;
  }
}
