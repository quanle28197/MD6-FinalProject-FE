export class User{
  name: string;
  phone: string;
  account: any;

  constructor(name: string, phone: string, account: any) {
    this.name = name;
    this.phone = phone;
    this.account = account;
  }
}
