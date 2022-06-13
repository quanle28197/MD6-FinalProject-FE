export class Company{
  id?: number;
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


  constructor(name: string, avatar: string, description: string, address: string, employeeQuantity: number, city: { id: any }, linkMap: string, phone: string, account: any) {
    this.name = name;
    this.avatar = avatar;
    this.description = description;
    this.address = address;
    this.employeeQuantity = employeeQuantity;
    this.city = city;
    this.linkMap = linkMap;
    this.phone = phone;
    this.account = account;
  }
}
