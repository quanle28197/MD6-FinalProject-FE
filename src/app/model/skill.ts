export class Skill{
  id?:number;
  name:string;
  proficiency: string;
  cv:any;

  constructor(name: string, cv: any, proficiency: string) {
    this.name = name;
    this.cv = cv;
    this.proficiency = proficiency;
  }
}
