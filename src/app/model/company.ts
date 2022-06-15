<<<<<<< HEAD
export class Company  {
  codeCompany?: string;
  name: string;
  avatar: string;
  description: string;
  address: string;
  employeeQuantity: number;
  city: any;
  linkMap: string;
  phone: string;
  statusCompany?: number;
  account: any;

  // tslint:disable-next-line:max-line-length
  constructor(codeCompany: string, name: string, avatar: string, description: string, address: string, employeeQuantity: number, city: any, linkMap: string, phone: string, statusCompany: number, account: any) {
    this.codeCompany = codeCompany;
    this.name = name;
    this.avatar = avatar;
    this.description = description;
    this.address = address;
    this.employeeQuantity = employeeQuantity;
    this.city = city;
    this.linkMap = linkMap;
    this.phone = phone;
    this.statusCompany = statusCompany;
    this.account = account;
  }
=======
export interface Company {
  id?: number;
  codeCompany?: number;
  name?: number;
  avatar?: string;
  description?: string;
  address?: string;
  emplployeeQuantity?: number;
  city?: any;
  linkMap?: string;
  phone?: string;
  statusCompany?: any;
  account?: string;
>>>>>>> ea402ab761a67c2d98d1e1118db4a330bde7cef0
}
