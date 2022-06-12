export class SearchJob {
  title: string;
  cityId: number;
  fieldId: number;
  comapnyId: number;
  vacancies: number;
  workingTimeId: number;
  start: number;
  pageSize: number;
  salary: number;

  constructor(title: string, cityId: number, fieldId: number, comapnyId: number, vacancies: number, workingTimeId: number, start: number, pageSize: number, salary: number) {
    this.title = title;
    this.cityId = cityId;
    this.fieldId = fieldId;
    this.comapnyId = comapnyId;
    this.vacancies = vacancies;
    this.workingTimeId = workingTimeId;
    this.start = start;
    this.pageSize = pageSize;
    this.salary = salary;
  }
}
