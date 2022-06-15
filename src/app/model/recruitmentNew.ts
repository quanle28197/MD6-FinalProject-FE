import {WorkingTime} from './workingTime';

export class RecruitmentNew {
  id?: number;
  title: string;
  workingTime: any;
  field: any;
  company: any;
  vacancies: any;
  expDate: string;
  description: string;
  city: any;
  quantity: number;
  gender: number;
  status?: number | string;
  salary: number;



  constructor(title: string, workingTime: any, field: any, company: any, vacancies: any, expDate: string, description: string, city: any, quantity: number, gender: number, salary: number) {
    this.title = title;
    this.workingTime = workingTime;
    this.field = field;
    this.company = company;
    this.vacancies = vacancies;
    this.expDate = expDate;
    this.description = description;
    this.city = city;
    this.quantity = quantity;
    this.gender = gender;
    this.salary = salary;
  }
}
