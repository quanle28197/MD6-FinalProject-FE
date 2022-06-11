export class Skill {
  id?: number;
  name: string;
  proficiency: string;
  cv: any;


  constructor(name: string, proficiency: string, cv: any) {
    this.name = name;
    this.proficiency = proficiency;
    this.cv = cv;
  }
}
