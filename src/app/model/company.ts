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
}
